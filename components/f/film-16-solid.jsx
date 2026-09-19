import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi-b3jbuf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oi-b3jbuf"/>`,
		"fallback": "heroicons:film-16-solid",
	});
}

export default Component;
