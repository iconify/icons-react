import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3c7cyvll.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3c7cyvll"/>`,
		"fallback": "f7:arrow-down-right-arrow-up-left",
	});
}

export default Component;
