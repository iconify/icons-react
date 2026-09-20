import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf7r-wbuh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zf7r-wbuh"/>`,
		"fallback": "qlementine-icons:education-16",
	});
}

export default Component;
