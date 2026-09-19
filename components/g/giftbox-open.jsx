import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0tux3b9f.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0tux3b9f"/>`,
		"fallback": "fluent-mdl2:giftbox-open",
	});
}

export default Component;
