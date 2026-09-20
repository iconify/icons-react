import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w5c8y-14a.css';
import '../../css/q/qo3g9rbnz.css';
import '../../css/j/j7xlbuzdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w5c8y-14a"/><path clip-rule="evenodd" class="qo3g9rbnz"/><path class="j7xlbuzdl"/></g>`,
		"fallback": "keyline-icons:file-type-corner-sharp-duotone",
	});
}

export default Component;
