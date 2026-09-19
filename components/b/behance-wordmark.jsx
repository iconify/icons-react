import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkp81t-cs.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkp81t-cs"/>`,
		"fallback": "devicon:behance-wordmark",
	});
}

export default Component;
