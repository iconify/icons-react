import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfa599b0o.css';
import '../../css/p/pc_zkzb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfa599b0o"/><path class="pc_zkzb0q"/>`,
		"fallback": "streamline-ultimate:bilibili-logo-bold",
	});
}

export default Component;
