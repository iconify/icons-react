import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqsq_tbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqsq_tbgp"/>`,
		"fallback": "tdesign:brackets",
	});
}

export default Component;
