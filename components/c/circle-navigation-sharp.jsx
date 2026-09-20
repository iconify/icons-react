import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvtt6wbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvtt6wbsp"/>`,
		"fallback": "keyline-icons:circle-navigation-sharp",
	});
}

export default Component;
