import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew1-g2bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew1-g2bgm"/>`,
		"fallback": "ri:gitee-line",
	});
}

export default Component;
