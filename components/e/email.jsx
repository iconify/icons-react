import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruzvz6hmn.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruzvz6hmn"/>`,
		"fallback": "topcoat:email",
	});
}

export default Component;
