import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw9ki5i3l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw9ki5i3l"/>`,
		"fallback": "fa7-solid:add",
	});
}

export default Component;
