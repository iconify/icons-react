import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8c6hdjmg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8c6hdjmg"/>`,
		"fallback": "selfhst:feedbin-light",
	});
}

export default Component;
