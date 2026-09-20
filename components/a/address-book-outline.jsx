import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_34kqjcq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_34kqjcq"/>`,
		"fallback": "teenyicons:address-book-outline",
	});
}

export default Component;
