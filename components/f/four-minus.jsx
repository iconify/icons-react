import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1tx1rb3g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1tx1rb3g"/>`,
		"fallback": "pinhead:four-minus",
	});
}

export default Component;
