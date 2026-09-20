import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0yfqoyhv.css';
import '../../css/f/fw7cb6b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i0yfqoyhv"/><path class="fw7cb6b-i"/></g>`,
		"fallback": "streamline-sharp-color:closed-umbrella-flat",
	});
}

export default Component;
