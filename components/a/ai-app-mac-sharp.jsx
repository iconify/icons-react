import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxh_cwblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxh_cwblb"/>`,
		"fallback": "pixelarticons:ai-app-mac-sharp",
	});
}

export default Component;
