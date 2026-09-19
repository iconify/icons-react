import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhr8tubfj.css';
import '../../css/h/hkbtkxbgz.css';
import '../../css/y/y4c48zyhq.css';
import '../../css/k/k131-zb1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hhr8tubfj"/><path class="hkbtkxbgz"/><path class="y4c48zyhq"/><path class="k131-zb1l"/></g>`,
		"fallback": "fluent-emoji-flat:folded-hands",
	});
}

export default Component;
