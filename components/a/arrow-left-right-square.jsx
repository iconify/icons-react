import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu5-snb2z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu5-snb2z"/>`,
		"fallback": "f7:arrow-left-right-square",
	});
}

export default Component;
