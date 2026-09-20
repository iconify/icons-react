import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/r/rn7th8byh.css';
import '../../css/x/xmees0bzv.css';
import '../../css/f/ff5ahwswr.css';
import '../../css/q/qhg4rccek.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="rn7th8byh"/><path class="xmees0bzv"/><path class="ff5ahwswr"/></g><path class="qhg4rccek"/>`,
		"fallback": "openmoji:desert",
	});
}

export default Component;
