import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi_6jvz2y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi_6jvz2y"/>`,
		"fallback": "fa7-solid:fill-drip",
	});
}

export default Component;
