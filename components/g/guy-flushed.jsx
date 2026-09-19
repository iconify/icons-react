import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g169grb8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g169grb8f"/>`,
		"fallback": "ps:guy-flushed",
	});
}

export default Component;
