import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv1wov0db.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv1wov0db"/>`,
		"fallback": "devicon:deepseek-wordmark",
	});
}

export default Component;
