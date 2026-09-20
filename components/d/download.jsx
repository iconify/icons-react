import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm0nqy8gq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm0nqy8gq"/>`,
		"fallback": "quill:download",
	});
}

export default Component;
