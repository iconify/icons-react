import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a02s0cczt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a02s0cczt"/>`,
		"fallback": "pinhead:book-with-arrows-recirculating",
	});
}

export default Component;
