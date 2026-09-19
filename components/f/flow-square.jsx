import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z3zey7b-a.css';
import '../../css/q/qch2pgblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z3zey7b-a"/><path class="qch2pgblf"/></g>`,
		"fallback": "hugeicons:flow-square",
	});
}

export default Component;
