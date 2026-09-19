import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hucedqvjc.css';
import '../../css/j/j8yh1x58g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hucedqvjc"/><path class="j8yh1x58g"/>`,
		"fallback": "carbon:gateway-vpn",
	});
}

export default Component;
