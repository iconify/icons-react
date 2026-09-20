import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_l7b9b9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_l7b9b9a"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-gdpr-shield",
	});
}

export default Component;
