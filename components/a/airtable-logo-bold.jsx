import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am9l1u9bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am9l1u9bb"/>`,
		"fallback": "streamline-ultimate:airtable-logo-bold",
	});
}

export default Component;
