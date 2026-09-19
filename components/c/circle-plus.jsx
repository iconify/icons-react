import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8aw46iem.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8aw46iem"/>`,
		"fallback": "fa7-solid:circle-plus",
	});
}

export default Component;
