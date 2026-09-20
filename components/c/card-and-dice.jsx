import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk5b0uhxo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk5b0uhxo"/>`,
		"fallback": "roentgen:card-and-dice",
	});
}

export default Component;
