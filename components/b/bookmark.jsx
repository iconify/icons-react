import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx7ll9vpm.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx7ll9vpm"/>`,
		"fallback": "zmdi:bookmark",
	});
}

export default Component;
