import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h16-qvbkp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h16-qvbkp"/>`,
		"fallback": "devicon-plain:bower-wordmark",
	});
}

export default Component;
