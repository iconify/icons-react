import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doh7t8rwk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doh7t8rwk"/>`,
		"fallback": "devicon:express-wordmark",
	});
}

export default Component;
