import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idq-hxb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idq-hxb8v"/>`,
		"fallback": "keyline-icons:arrow-in-up-left-dashed-panel-sharp",
	});
}

export default Component;
