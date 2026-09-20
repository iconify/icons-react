import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip6956biy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip6956biy"/>`,
		"fallback": "teenyicons:git-compare-solid",
	});
}

export default Component;
