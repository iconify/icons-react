import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0jp0tjsg.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0jp0tjsg"/>`,
		"fallback": "ps:dribbble",
	});
}

export default Component;
