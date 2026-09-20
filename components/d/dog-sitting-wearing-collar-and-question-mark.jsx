import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuzx80lqc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuzx80lqc"/>`,
		"fallback": "pinhead:dog-sitting-wearing-collar-and-question-mark",
	});
}

export default Component;
