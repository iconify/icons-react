import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg2bd9-ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zg2bd9-ew"/>`,
		"fallback": "streamline-logos:dailymotion-logo-solid",
	});
}

export default Component;
