import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt3vx2b-r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt3vx2b-r"/>`,
		"fallback": "f7:at-circle-fill",
	});
}

export default Component;
