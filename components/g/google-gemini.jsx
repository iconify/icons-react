import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spj178bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spj178bwm"/>`,
		"fallback": "meteor-icons:google-gemini",
	});
}

export default Component;
