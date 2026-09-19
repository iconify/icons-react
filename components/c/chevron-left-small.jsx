import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppf2-26kt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppf2-26kt"/>`,
		"fallback": "fluent-mdl2:chevron-left-small",
	});
}

export default Component;
