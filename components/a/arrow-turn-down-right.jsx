import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlg1cmb_i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlg1cmb_i"/>`,
		"fallback": "f7:arrow-turn-down-right",
	});
}

export default Component;
