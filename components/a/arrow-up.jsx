import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8z4-hb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8z4-hb3j"/>`,
		"fallback": "struq:arrow-up",
	});
}

export default Component;
