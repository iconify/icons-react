import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0n8kv_ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0n8kv_ez"/>`,
		"fallback": "ix:aas-shell-check-ok",
	});
}

export default Component;
