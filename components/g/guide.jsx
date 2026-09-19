import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjfhnp7yw.css';
import '../../css/c/cyhr1fblx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjfhnp7yw"/><path class="cyhr1fblx"/>`,
		"fallback": "ep:guide",
	});
}

export default Component;
