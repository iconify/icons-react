import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vseh-l-0s.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vseh-l-0s"/>`,
		"fallback": "fa:indent",
	});
}

export default Component;
