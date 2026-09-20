import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm9ywsb4k.css';
import '../../css/r/rz27cjbcl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm9ywsb4k"/><path class="rz27cjbcl"/>`,
		"fallback": "vaadin:clipboard-cross",
	});
}

export default Component;
