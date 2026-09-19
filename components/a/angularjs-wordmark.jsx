import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkw265b-g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkw265b-g"/>`,
		"fallback": "devicon-plain:angularjs-wordmark",
	});
}

export default Component;
