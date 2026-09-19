import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0x409cvk.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0x409cvk"/>`,
		"fallback": "fa:black-tie",
	});
}

export default Component;
