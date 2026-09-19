import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zowy7to0a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zowy7to0a"/>`,
		"fallback": "fa7-solid:display",
	});
}

export default Component;
