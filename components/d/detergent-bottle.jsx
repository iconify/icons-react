import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-wk0oblq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-wk0oblq"/>`,
		"fallback": "pinhead:detergent-bottle",
	});
}

export default Component;
