import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzoekvb0h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzoekvb0h"/>`,
		"fallback": "f7:chevron-down-square-fill",
	});
}

export default Component;
