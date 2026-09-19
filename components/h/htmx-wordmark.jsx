import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlw9lr9hg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlw9lr9hg"/>`,
		"fallback": "devicon-plain:htmx-wordmark",
	});
}

export default Component;
