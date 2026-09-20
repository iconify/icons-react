import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyll4mbwp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyll4mbwp"/>`,
		"fallback": "la:creative-commons-nc-eu",
	});
}

export default Component;
