import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpav7h32m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpav7h32m"/>`,
		"fallback": "andrsrxn:currency-rub",
	});
}

export default Component;
