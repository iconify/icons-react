import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u3ljt2qdc.css';
import '../../css/c/cp7_mb3bj.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="u3ljt2qdc"/><path clip-rule="evenodd" class="cp7_mb3bj"/></g>`,
		"fallback": "skill-icons:adonis",
	});
}

export default Component;
