import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-7u2gbjg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-7u2gbjg"/>`,
		"fallback": "fa6-solid:chart-bar",
	});
}

export default Component;
