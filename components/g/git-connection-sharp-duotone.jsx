import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/f25gi5bye.css';
import '../../css/g/groubrorl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="f25gi5bye"/><path class="groubrorl"/></g>`,
		"fallback": "keyline-icons:git-connection-sharp-duotone",
	});
}

export default Component;
