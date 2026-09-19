import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv8gbu0fn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv8gbu0fn"/>`,
		"fallback": "devicon-plain:google-wordmark",
	});
}

export default Component;
