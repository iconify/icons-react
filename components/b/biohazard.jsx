import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4jw8wbpz.css';
import '../../css/b/bnnoq8bqn.css';
import '../../css/e/ejqbi5b-l.css';
import '../../css/i/i3ff7jbav.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f4jw8wbpz"/><circle class="bnnoq8bqn"/><path class="ejqbi5b-l"/><path class="i3ff7jbav"/>`,
		"fallback": "openmoji:biohazard",
	});
}

export default Component;
