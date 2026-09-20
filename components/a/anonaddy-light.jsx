import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd506yb5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd506yb5b"/>`,
		"fallback": "selfhst:anonaddy-light",
	});
}

export default Component;
