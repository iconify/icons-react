import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zudcknbit.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zudcknbit"/>`,
		"fallback": "selfhst:flohmarkt-light",
	});
}

export default Component;
