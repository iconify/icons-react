import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc011j55m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc011j55m"/>`,
		"fallback": "pinhead:banknote-stack",
	});
}

export default Component;
