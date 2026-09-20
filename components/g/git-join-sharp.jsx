import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg447v4ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg447v4ql"/>`,
		"fallback": "keyline-icons:git-join-sharp",
	});
}

export default Component;
