import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfbnxnbud.css';
import '../../css/l/l7jujabhz.css';

const viewBox = {"width":224.99,"height":160.66};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfbnxnbud"/><path class="l7jujabhz"/>`,
		"fallback": "thesvg-color:fanta",
	});
}

export default Component;
