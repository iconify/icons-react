import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak_owkqcw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak_owkqcw"/>`,
		"fallback": "fa-solid:arrow-circle-up",
	});
}

export default Component;
