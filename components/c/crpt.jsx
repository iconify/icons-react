import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sioyz1b8f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sioyz1b8f"/>`,
		"fallback": "cryptocurrency:crpt",
	});
}

export default Component;
