import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjcp39i-r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjcp39i-r"/>`,
		"fallback": "devicon-plain:gitkraken-wordmark",
	});
}

export default Component;
