import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbqrb3a2m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbqrb3a2m"/>`,
		"fallback": "devicon-plain:artixlinux-wordmark",
	});
}

export default Component;
