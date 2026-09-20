import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q60ckztmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q60ckztmb"/>`,
		"fallback": "streamline-ultimate:content-paper-edit",
	});
}

export default Component;
