import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl6az0olz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl6az0olz"/>`,
		"fallback": "pinhead:811",
	});
}

export default Component;
