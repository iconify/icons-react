import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/c/c5phqf84j.css';
import '../../css/l/laqem3yyk.css';
import '../../css/p/pwtfkab3z.css';
import '../../css/d/d0ark-bha.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="c5phqf84j"/><path class="laqem3yyk"/><path class="pwtfkab3z"/><path class="d0ark-bha"/></g>`,
		"fallback": "fluent-emoji-flat:grinning-face-with-sweat",
	});
}

export default Component;
