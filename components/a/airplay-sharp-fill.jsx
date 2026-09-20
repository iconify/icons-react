import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xlsx8bbyt.css';
import '../../css/m/mx9-lpb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xlsx8bbyt"/><path clip-rule="evenodd" class="mx9-lpb6q"/></g>`,
		"fallback": "keyline-icons:airplay-sharp-fill",
	});
}

export default Component;
