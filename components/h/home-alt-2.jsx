import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufv8hebkd.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufv8hebkd"/>`,
		"fallback": "marketeq:home-alt-2",
	});
}

export default Component;
