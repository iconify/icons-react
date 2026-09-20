import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzzxu-bnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzzxu-bnw"/>`,
		"fallback": "streamline-ultimate:branch-line-5",
	});
}

export default Component;
