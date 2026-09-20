import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6xu0bxpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z6xu0bxpn"/>`,
		"fallback": "reicon:donut2",
	});
}

export default Component;
