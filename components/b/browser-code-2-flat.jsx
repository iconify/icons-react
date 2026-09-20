import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vikd8bchq.css';
import '../../css/h/h2ri7bcwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vikd8bchq"/><path clip-rule="evenodd" class="h2ri7bcwy"/></g>`,
		"fallback": "streamline-sharp-color:browser-code-2-flat",
	});
}

export default Component;
