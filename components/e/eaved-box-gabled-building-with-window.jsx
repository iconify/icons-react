import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu7q4ib2g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu7q4ib2g"/>`,
		"fallback": "pinhead:eaved-box-gabled-building-with-window",
	});
}

export default Component;
