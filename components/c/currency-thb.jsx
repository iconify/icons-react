import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqwr55gdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqwr55gdj"/>`,
		"fallback": "andrsrxn:currency-thb",
	});
}

export default Component;
