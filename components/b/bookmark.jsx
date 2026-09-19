import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrwfk1bik.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrwfk1bik"/>`,
		"fallback": "fa7-regular:bookmark",
	});
}

export default Component;
