import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5c7dqbak.css';
import '../../css/a/a4r9jjopi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y5c7dqbak"/><path class="a4r9jjopi"/></g>`,
		"fallback": "coolicons:compass-duotone-round",
	});
}

export default Component;
