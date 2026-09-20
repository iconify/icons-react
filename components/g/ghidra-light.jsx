import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abv6fbbiq.css';
import '../../css/v/vy5mqsbys.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abv6fbbiq"/><path class="vy5mqsbys"/>`,
		"fallback": "selfhst:ghidra-light",
	});
}

export default Component;
