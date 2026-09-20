import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf6g9sb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf6g9sb2q"/>`,
		"fallback": "mdi:card-bulleted-settings-outline",
	});
}

export default Component;
