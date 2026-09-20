import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6khx287g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6khx287g"/>`,
		"fallback": "keyline-icons:banknote-2-check",
	});
}

export default Component;
