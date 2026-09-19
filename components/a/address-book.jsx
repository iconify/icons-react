import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j90dtx-pe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j90dtx-pe"/>`,
		"fallback": "fa7-regular:address-book",
	});
}

export default Component;
