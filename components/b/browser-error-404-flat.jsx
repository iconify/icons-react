import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vikd8bchq.css';
import '../../css/v/vszu6jb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vikd8bchq"/><path clip-rule="evenodd" class="vszu6jb6t"/></g>`,
		"fallback": "streamline-sharp-color:browser-error-404-flat",
	});
}

export default Component;
