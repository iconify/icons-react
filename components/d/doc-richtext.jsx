import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9uf7gbnw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9uf7gbnw"/>`,
		"fallback": "f7:doc-richtext",
	});
}

export default Component;
