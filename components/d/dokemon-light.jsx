import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h23lf5ovw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h23lf5ovw"/>`,
		"fallback": "selfhst:dokemon-light",
	});
}

export default Component;
