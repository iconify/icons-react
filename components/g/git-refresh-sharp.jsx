import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxc60ek4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxc60ek4g"/>`,
		"fallback": "keyline-icons:git-refresh-sharp",
	});
}

export default Component;
