import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5axhacgi.css';
import '../../css/l/lmu4qk5wf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5axhacgi"/><path clip-rule="evenodd" class="lmu4qk5wf"/>`,
		"fallback": "qlementine-icons:faq-16",
	});
}

export default Component;
