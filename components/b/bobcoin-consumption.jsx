import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsna8m2xi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsna8m2xi"/>`,
		"fallback": "carbon:bobcoin-consumption",
	});
}

export default Component;
