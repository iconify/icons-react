import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo_sdj8_c.css';

const viewBox = {"width":384,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo_sdj8_c"/>`,
		"fallback": "whh:i",
	});
}

export default Component;
