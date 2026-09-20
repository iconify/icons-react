import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usteh0sxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usteh0sxt"/>`,
		"fallback": "keyline-icons:clock-4-sharp",
	});
}

export default Component;
