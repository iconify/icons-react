import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2ils884q.css';
import '../../css/o/ogyf_ipgy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j2ils884q"/><path class="ogyf_ipgy"/></g>`,
		"fallback": "fluent-emoji-flat:cucumber",
	});
}

export default Component;
