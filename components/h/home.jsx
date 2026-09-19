import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th0srzbqk.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th0srzbqk"/>`,
		"fallback": "whh:home",
	});
}

export default Component;
