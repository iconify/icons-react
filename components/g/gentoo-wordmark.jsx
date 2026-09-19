import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrib8bc3g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrib8bc3g"/>`,
		"fallback": "devicon-plain:gentoo-wordmark",
	});
}

export default Component;
