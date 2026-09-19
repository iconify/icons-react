import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7zjx1lhs.css';
import '../../css/h/hjnra_0-x.css';
import '../../css/b/b5_ngdv9b.css';
import '../../css/t/t4b5bjr0k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l7zjx1lhs"/><path class="hjnra_0-x"/><path class="b5_ngdv9b"/><path class="t4b5bjr0k"/></g>`,
		"fallback": "fluent-emoji-flat:broom",
	});
}

export default Component;
