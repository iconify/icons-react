import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk1emt_3m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk1emt_3m"/>`,
		"fallback": "pinhead:four-minus-over-water",
	});
}

export default Component;
