import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggisaj66z.css';

const viewBox = {"width":472,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggisaj66z"/>`,
		"fallback": "zmdi:airplay",
	});
}

export default Component;
