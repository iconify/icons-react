import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfqhoqbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfqhoqbwd"/>`,
		"fallback": "mdi:alphabet-u-circle-outline",
	});
}

export default Component;
