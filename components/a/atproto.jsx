import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vghuicoks.css';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vghuicoks"/>`,
		"fallback": "thesvg-color:atproto",
	});
}

export default Component;
