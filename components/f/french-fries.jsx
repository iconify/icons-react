import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fsgn4rbxy.css';
import '../../css/e/ekrijjhme.css';
import '../../css/c/cjb77fbnb.css';
import '../../css/v/vesx85bdo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fsgn4rbxy"/><path class="ekrijjhme"/><path class="cjb77fbnb"/><path class="vesx85bdo"/></g>`,
		"fallback": "fluent-emoji-flat:french-fries",
	});
}

export default Component;
