import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l03o9u8jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l03o9u8jg"/>`,
		"fallback": "withicons:fish-solid",
	});
}

export default Component;
