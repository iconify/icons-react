import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4jpy0b8h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4jpy0b8h"/>`,
		"fallback": "f7:funnel",
	});
}

export default Component;
