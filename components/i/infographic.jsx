import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1m3t8g2t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1m3t8g2t"/>`,
		"fallback": "whh:infographic",
	});
}

export default Component;
