import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm9ywsb4k.css';
import '../../css/e/eipzjac9w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm9ywsb4k"/><path class="eipzjac9w"/>`,
		"fallback": "vaadin:clipboard-pulse",
	});
}

export default Component;
