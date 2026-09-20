import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uto8vj0dn.css';

const viewBox = {"width":20,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uto8vj0dn"/>`,
		"fallback": "jam:differenciation",
	});
}

export default Component;
