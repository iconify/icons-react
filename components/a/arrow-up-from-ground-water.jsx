import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iruwnubha.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iruwnubha"/>`,
		"fallback": "fa6-solid:arrow-up-from-ground-water",
	});
}

export default Component;
