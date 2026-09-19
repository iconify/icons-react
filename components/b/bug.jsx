import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9loobc-l.css';
import '../../css/c/cjdjsyz_j.css';
import '../../css/e/e9da9pbdt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9loobc-l"/><path class="cjdjsyz_j"/><path class="e9da9pbdt"/></g>`,
		"fallback": "fluent-emoji-flat:bug",
	});
}

export default Component;
