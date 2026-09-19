import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fycv7t8zn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fycv7t8zn"/>`,
		"fallback": "devicon-plain:inertiajs-wordmark",
	});
}

export default Component;
