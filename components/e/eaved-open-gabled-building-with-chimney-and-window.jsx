import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2gvucboh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2gvucboh"/>`,
		"fallback": "pinhead:eaved-open-gabled-building-with-chimney-and-window",
	});
}

export default Component;
