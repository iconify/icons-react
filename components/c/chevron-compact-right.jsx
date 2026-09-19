import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3z3v4axp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3z3v4axp"/>`,
		"fallback": "f7:chevron-compact-right",
	});
}

export default Component;
