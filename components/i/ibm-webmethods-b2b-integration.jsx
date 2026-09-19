import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugvlctb8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugvlctb8g"/>`,
		"fallback": "carbon:ibm-webmethods-b2b-integration",
	});
}

export default Component;
