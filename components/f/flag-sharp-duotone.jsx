import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/ahv5xvbvk.css';
import '../../css/q/qbgtuxb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ahv5xvbvk"/><path class="qbgtuxb9a"/></g>`,
		"fallback": "keyline-icons:flag-sharp-duotone",
	});
}

export default Component;
