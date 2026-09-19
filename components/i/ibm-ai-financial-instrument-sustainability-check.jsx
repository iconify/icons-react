import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylolabndh.css';
import '../../css/c/c1x3yyvty.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylolabndh"/><path class="c1x3yyvty"/>`,
		"fallback": "carbon:ibm-ai-financial-instrument-sustainability-check",
	});
}

export default Component;
