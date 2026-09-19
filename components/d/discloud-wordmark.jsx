import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydv6ohbun.css';
import '../../css/g/g-mfsnbds.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydv6ohbun"/><path class="g-mfsnbds"/>`,
		"fallback": "devicon:discloud-wordmark",
	});
}

export default Component;
