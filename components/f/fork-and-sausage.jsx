import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td1ir3b8d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td1ir3b8d"/>`,
		"fallback": "pinhead:fork-and-sausage",
	});
}

export default Component;
