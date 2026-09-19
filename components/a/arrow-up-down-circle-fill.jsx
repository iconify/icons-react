import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfamsoo7b.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfamsoo7b"/>`,
		"fallback": "f7:arrow-up-down-circle-fill",
	});
}

export default Component;
