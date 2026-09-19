import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzhx1bcdv.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzhx1bcdv"/>`,
		"fallback": "fa6-solid:boxes-stacked",
	});
}

export default Component;
