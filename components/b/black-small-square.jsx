import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsiv3aben.css';
import '../../css/q/qta_1ibzz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsiv3aben"/><path class="qta_1ibzz"/>`,
		"fallback": "openmoji:black-small-square",
	});
}

export default Component;
