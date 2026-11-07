import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1oersbxq.css';
import '../../css/x/xmwn8lbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1oersbxq"/><path clip-rule="evenodd" class="xmwn8lbyc"/>`,
		"fallback": "solar:heart-pulse-outline",
	});
}

export default Component;
