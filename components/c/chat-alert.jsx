import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/h/hmd6rr.css';
import '../../css/p/pfsmgv.css';
import '../../css/z/zahr3u.css';
import '../../css/s/so-from-70.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c hmd6rr"/><path class="a0m25c pfsmgv"/><path class="a0m25c zahr3u"/>`,
		"fallback": "line-md:chat-alert",
	});
}

export default Component;
