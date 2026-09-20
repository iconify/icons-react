import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjg4do0um.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjg4do0um"/>`,
		"fallback": "zondicons:arrow-thick-down",
	});
}

export default Component;
