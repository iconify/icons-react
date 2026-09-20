import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hph7rtbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hph7rtbjp"/>`,
		"fallback": "nrk:404",
	});
}

export default Component;
