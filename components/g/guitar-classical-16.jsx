import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1cd9e3yd.css';
import '../../css/l/lsqebab9b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1cd9e3yd"/><path class="lsqebab9b"/>`,
		"fallback": "qlementine-icons:guitar-classical-16",
	});
}

export default Component;
