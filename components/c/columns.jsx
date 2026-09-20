import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwr2zcchh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwr2zcchh"/>`,
		"fallback": "radix-icons:columns",
	});
}

export default Component;
