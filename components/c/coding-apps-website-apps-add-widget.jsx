import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgdcv4r6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgdcv4r6w"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-apps-add-widget",
	});
}

export default Component;
