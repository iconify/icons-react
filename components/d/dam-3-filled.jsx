import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxnxkm_gj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxnxkm_gj"/>`,
		"fallback": "tdesign:dam-3-filled",
	});
}

export default Component;
