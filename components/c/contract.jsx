import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd1xu4azj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd1xu4azj"/>`,
		"fallback": "andrsrxn:contract",
	});
}

export default Component;
