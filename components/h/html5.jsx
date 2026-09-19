import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1jf6ebeu.css';

const viewBox = {"width":1408,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1jf6ebeu"/>`,
		"fallback": "fa:html5",
	});
}

export default Component;
