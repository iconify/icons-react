import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxct1bw3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kxct1bw3d"/>`,
		"fallback": "nrk:face-smiling-solid-expressive",
	});
}

export default Component;
