import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utdqn1pvt.css';
import '../../css/l/lm9ywsb4k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utdqn1pvt"/><path class="lm9ywsb4k"/>`,
		"fallback": "vaadin:clipboard-text",
	});
}

export default Component;
