import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjzy66b6w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjzy66b6w"/>`,
		"fallback": "devicon-plain:foundation-wordmark",
	});
}

export default Component;
