import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhufd2bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhufd2bgm"/>`,
		"fallback": "ri:download-fill",
	});
}

export default Component;
