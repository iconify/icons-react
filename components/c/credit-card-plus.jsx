import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym9ljfbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym9ljfbya"/>`,
		"fallback": "pixelarticons:credit-card-plus",
	});
}

export default Component;
