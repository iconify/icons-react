import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei6n3ebmm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei6n3ebmm"/>`,
		"fallback": "f7:bolt-badge-a-fill",
	});
}

export default Component;
