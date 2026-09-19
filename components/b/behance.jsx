import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avsbps_-w.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avsbps_-w"/>`,
		"fallback": "ps:behance",
	});
}

export default Component;
