import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8f4ehb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8f4ehb4f"/>`,
		"fallback": "keyline-icons:circle-more-vertical-sharp-fill",
	});
}

export default Component;
