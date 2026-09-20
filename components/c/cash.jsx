import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozrfghbao.css';
import '../../css/h/h7g0yix5d.css';
import '../../css/v/v1jjnr7lu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozrfghbao"/><path class="h7g0yix5d"/><path class="v1jjnr7lu"/>`,
		"fallback": "vaadin:cash",
	});
}

export default Component;
