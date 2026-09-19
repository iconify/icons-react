import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajs0hsgkn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajs0hsgkn"/>`,
		"fallback": "fa7-regular:clock",
	});
}

export default Component;
