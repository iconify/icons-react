import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaye1ubvf.css';
import '../../css/e/ej6vge06z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaye1ubvf"/><path class="ej6vge06z"/>`,
		"fallback": "vaadin:clock",
	});
}

export default Component;
