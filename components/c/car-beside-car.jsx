import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_s23zb2q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_s23zb2q"/>`,
		"fallback": "pinhead:car-beside-car",
	});
}

export default Component;
