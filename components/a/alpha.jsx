import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn_nkmwfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn_nkmwfc"/>`,
		"fallback": "andrsrxn:alpha",
	});
}

export default Component;
