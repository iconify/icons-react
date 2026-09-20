import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyuhq9bkq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyuhq9bkq"/>`,
		"fallback": "picon:basket",
	});
}

export default Component;
