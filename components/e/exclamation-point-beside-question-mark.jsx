import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kihstx6sx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kihstx6sx"/>`,
		"fallback": "pinhead:exclamation-point-beside-question-mark",
	});
}

export default Component;
