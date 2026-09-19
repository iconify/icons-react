import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6fpwyrhf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6fpwyrhf"/>`,
		"fallback": "f7:arrow-uturn-right-circle",
	});
}

export default Component;
