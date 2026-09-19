import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f99-2obxx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f99-2obxx"/>`,
		"fallback": "devicon-plain:cypressio-wordmark",
	});
}

export default Component;
