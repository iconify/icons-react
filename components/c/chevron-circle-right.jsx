import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o55fdr30x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o55fdr30x"/>`,
		"fallback": "fa7-solid:chevron-circle-right",
	});
}

export default Component;
