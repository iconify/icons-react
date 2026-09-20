import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urq8ylumb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="urq8ylumb"/>`,
		"fallback": "nrk:360",
	});
}

export default Component;
