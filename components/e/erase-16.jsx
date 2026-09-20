import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-gd7u-dq.css';
import '../../css/a/a6o68sb3j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-gd7u-dq"/><path clip-rule="evenodd" class="a6o68sb3j"/>`,
		"fallback": "qlementine-icons:erase-16",
	});
}

export default Component;
