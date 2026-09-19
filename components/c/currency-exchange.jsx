import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpot68gto.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpot68gto"/>`,
		"fallback": "fluent-emoji-high-contrast:currency-exchange",
	});
}

export default Component;
