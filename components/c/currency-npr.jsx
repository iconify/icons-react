import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msf46bcth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msf46bcth"/>`,
		"fallback": "andrsrxn:currency-npr",
	});
}

export default Component;
