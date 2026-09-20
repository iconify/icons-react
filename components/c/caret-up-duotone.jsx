import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfdja5cyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfdja5cyt"/>`,
		"fallback": "keyline-icons:caret-up-duotone",
	});
}

export default Component;
