import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2b9z8qre.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2b9z8qre"/>`,
		"fallback": "fa6-solid:audio-description",
	});
}

export default Component;
