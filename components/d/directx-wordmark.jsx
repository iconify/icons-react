import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e13j-rb2h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e13j-rb2h"/>`,
		"fallback": "devicon:directx-wordmark",
	});
}

export default Component;
