import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc1oq6b-b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc1oq6b-b"/>`,
		"fallback": "la:info-circle",
	});
}

export default Component;
