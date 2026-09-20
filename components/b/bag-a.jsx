import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c5stiqb0u.css';
import '../../css/p/p2pglip6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c5stiqb0u"/><path class="p2pglip6j"/></g>`,
		"fallback": "mage:bag-a",
	});
}

export default Component;
