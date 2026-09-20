import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw06-bcsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw06-bcsj"/>`,
		"fallback": "pixelarticons:app-mac",
	});
}

export default Component;
