import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnqtpl8nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnqtpl8nr"/>`,
		"fallback": "ri:behance-fill",
	});
}

export default Component;
