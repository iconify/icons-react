import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef8a_j6zj.css';
import '../../css/r/rxpq2xbeq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef8a_j6zj"/><path class="rxpq2xbeq"/>`,
		"fallback": "carbon:document-processor",
	});
}

export default Component;
