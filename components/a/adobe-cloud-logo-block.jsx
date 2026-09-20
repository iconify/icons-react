import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcq-wwlid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gcq-wwlid"/>`,
		"fallback": "streamline-logos:adobe-cloud-logo-block",
	});
}

export default Component;
