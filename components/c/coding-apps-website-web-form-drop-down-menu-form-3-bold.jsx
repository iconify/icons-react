import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw3_kmb9z.css';
import '../../css/r/r9zynwktx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw3_kmb9z"/><path class="r9zynwktx"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-web-form-drop-down-menu-form-3-bold",
	});
}

export default Component;
