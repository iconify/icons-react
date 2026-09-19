import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf60hrb7l.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf60hrb7l"/>`,
		"fallback": "f7:arrow-up-right-circle",
	});
}

export default Component;
