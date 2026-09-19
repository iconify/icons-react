import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkcnz7bbw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkcnz7bbw"/>`,
		"fallback": "f7:arrow-uturn-left",
	});
}

export default Component;
