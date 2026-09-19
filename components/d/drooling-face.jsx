import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/g/g5on0re9r.css';
import '../../css/p/prxpt6m4j.css';
import '../../css/b/bpqb35bsq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="g5on0re9r"/><path class="prxpt6m4j"/><path class="bpqb35bsq"/></g>`,
		"fallback": "fluent-emoji-flat:drooling-face",
	});
}

export default Component;
