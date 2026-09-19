import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wchz1fbti.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wchz1fbti"/>`,
		"fallback": "f7:bag-badge-minus",
	});
}

export default Component;
