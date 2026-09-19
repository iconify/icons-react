import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnsi52bpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnsi52bpc"/>`,
		"fallback": "ps:bell",
	});
}

export default Component;
