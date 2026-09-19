import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4bvc2biz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4bvc2biz"/>`,
		"fallback": "fa7-solid:caret-right",
	});
}

export default Component;
