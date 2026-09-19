import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9k84bc7l.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9k84bc7l"/>`,
		"fallback": "fa-solid:city",
	});
}

export default Component;
