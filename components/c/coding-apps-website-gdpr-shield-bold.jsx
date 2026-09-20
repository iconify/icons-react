import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pscmb2bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pscmb2bwh"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-gdpr-shield-bold",
	});
}

export default Component;
