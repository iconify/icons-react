import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go8ehsr3x.css';
import '../../css/z/zut4dr69s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go8ehsr3x"/><path class="zut4dr69s"/>`,
		"fallback": "vaadin:copyright",
	});
}

export default Component;
