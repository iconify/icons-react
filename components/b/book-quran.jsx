import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq88icc9f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq88icc9f"/>`,
		"fallback": "fa7-solid:book-quran",
	});
}

export default Component;
