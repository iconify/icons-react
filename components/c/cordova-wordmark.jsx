import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duyp1yy5b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duyp1yy5b"/>`,
		"fallback": "devicon-plain:cordova-wordmark",
	});
}

export default Component;
