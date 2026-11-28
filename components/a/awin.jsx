import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpholnzeo.css';
import '../../css/t/t3zbj22fa.css';
import '../../css/j/j7seq4bbf.css';
import '../../css/z/z3ck36bfj.css';
import '../../css/e/e3-urhbop.css';
import '../../css/c/cs994mb8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpholnzeo"/><path class="t3zbj22fa"/><path class="j7seq4bbf"/><path class="z3ck36bfj"/><path class="e3-urhbop"/><path class="cs994mb8w"/>`,
		"fallback": "selfhst:awin",
	});
}

export default Component;
