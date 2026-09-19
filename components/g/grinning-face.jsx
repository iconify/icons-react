import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/d/d2nmx-jmq.css';
import '../../css/w/wymqbsehw.css';
import '../../css/l/laqem3yyk.css';
import '../../css/p/pwtfkab3z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="d2nmx-jmq"/><path class="wymqbsehw"/><path class="laqem3yyk"/><path class="pwtfkab3z"/></g>`,
		"fallback": "fluent-emoji-flat:grinning-face",
	});
}

export default Component;
