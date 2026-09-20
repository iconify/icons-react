import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjomfxbol.css';
import '../../css/p/p23ngibzj.css';
import '../../css/f/fw-xaacke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tjomfxbol"/><path clip-rule="evenodd" class="p23ngibzj"/><path class="fw-xaacke"/></g>`,
		"fallback": "streamline-sharp-color:inbox-favorite-flat",
	});
}

export default Component;
