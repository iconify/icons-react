import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twdnpfg0c.css';
import '../../css/q/qpq0ojcwu.css';
import '../../css/i/i36mrlb_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twdnpfg0c"/><path class="qpq0ojcwu"/><path class="i36mrlb_i"/>`,
		"fallback": "streamline-pixel:food-drink-pizza",
	});
}

export default Component;
