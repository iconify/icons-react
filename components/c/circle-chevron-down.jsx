import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csivk-nbx.css';
import '../../css/z/znu966bzc.css';
import '../../css/z/zjm716l0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csivk-nbx wm-k"/><path class="wm-a znu966bzc"/><path class="wm-a zjm716l0n"/>`,
		"fallback": "withicons-bauhaus:circle-chevron-down",
	});
}

export default Component;
