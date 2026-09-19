import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3kj9tbpq.css';
import '../../css/c/cat22_54h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3kj9tbpq"/><path class="cat22_54h"/>`,
		"fallback": "carbon:drop-photo",
	});
}

export default Component;
