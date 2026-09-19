import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7-deq81w.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7-deq81w"/>`,
		"fallback": "f7:arrow-down-doc-fill",
	});
}

export default Component;
