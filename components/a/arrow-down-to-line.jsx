import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik90xbc1v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik90xbc1v"/>`,
		"fallback": "f7:arrow-down-to-line",
	});
}

export default Component;
