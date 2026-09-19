import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftv6d47py.css';
import '../../css/l/lz96xw1en.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftv6d47py"/><path class="lz96xw1en"/>`,
		"fallback": "carbon:gem-reference",
	});
}

export default Component;
