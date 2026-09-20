import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ian57fbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ian57fbze"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-web-dev-api-cloud",
	});
}

export default Component;
