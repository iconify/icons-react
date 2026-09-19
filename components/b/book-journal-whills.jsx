import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajnikkn8w.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajnikkn8w"/>`,
		"fallback": "fa6-solid:book-journal-whills",
	});
}

export default Component;
