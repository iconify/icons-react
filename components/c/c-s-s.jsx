import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txaq40cdc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txaq40cdc"/>`,
		"fallback": "fluent-mdl2:c-s-s",
	});
}

export default Component;
