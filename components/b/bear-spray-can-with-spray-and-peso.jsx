import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpyljtb0t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpyljtb0t"/>`,
		"fallback": "pinhead:bear-spray-can-with-spray-and-peso",
	});
}

export default Component;
