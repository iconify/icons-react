import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcke9jbmh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcke9jbmh"/>`,
		"fallback": "selfhst:apache-kafka-light",
	});
}

export default Component;
