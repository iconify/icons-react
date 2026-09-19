import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oov1-gbqp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oov1-gbqp"/>`,
		"fallback": "academicons:datacite",
	});
}

export default Component;
