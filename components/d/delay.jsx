import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn904sb1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn904sb1l"/>`,
		"fallback": "carbon:delay",
	});
}

export default Component;
