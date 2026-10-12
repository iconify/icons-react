import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sddu2ez7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sddu2ez7c"/>`,
		"fallback": "andrsrxn:brackets",
	});
}

export default Component;
