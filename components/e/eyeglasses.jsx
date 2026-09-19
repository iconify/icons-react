import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbr-bibca.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbr-bibca"/>`,
		"fallback": "f7:eyeglasses",
	});
}

export default Component;
