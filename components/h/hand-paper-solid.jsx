import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvdsl_bar.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvdsl_bar"/>`,
		"fallback": "la:hand-paper-solid",
	});
}

export default Component;
