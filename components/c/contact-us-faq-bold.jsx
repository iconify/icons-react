import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoeey_btx.css';
import '../../css/w/wp2wpdvnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoeey_btx"/><path class="wp2wpdvnk"/>`,
		"fallback": "streamline-ultimate:contact-us-faq-bold",
	});
}

export default Component;
