import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvr_jqvun.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tvr_jqvun"/>`,
		"fallback": "qlementine-icons:forbidden-16",
	});
}

export default Component;
