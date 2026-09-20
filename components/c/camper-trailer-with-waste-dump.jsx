import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viga7s65v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viga7s65v"/>`,
		"fallback": "pinhead:camper-trailer-with-waste-dump",
	});
}

export default Component;
