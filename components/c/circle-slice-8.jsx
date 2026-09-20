import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaji_jb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaji_jb3d"/>`,
		"fallback": "mdi:circle-slice-8",
	});
}

export default Component;
