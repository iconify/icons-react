import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px1i3m8dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px1i3m8dq"/>`,
		"fallback": "ri:info-card-fill",
	});
}

export default Component;
