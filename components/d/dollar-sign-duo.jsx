import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vjv-rqbre.css';
import '../../css/r/rasux0b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vjv-rqbre"/><path class="rasux0b5a wm-a"/></g>`,
		"fallback": "withicons:dollar-sign-duo",
	});
}

export default Component;
