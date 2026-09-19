import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfv4ynbdg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfv4ynbdg"/>`,
		"fallback": "devicon-plain:centos-wordmark",
	});
}

export default Component;
