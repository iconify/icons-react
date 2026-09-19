import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3j32acby.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3j32acby"/>`,
		"fallback": "fa:check-circle",
	});
}

export default Component;
