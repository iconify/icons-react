import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxou3qzac.css';
import '../../css/e/ewdob5y9s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rxou3qzac"/><path clip-rule="evenodd" class="ewdob5y9s"/></g>`,
		"fallback": "streamline-plump-color:fit-height-flat",
	});
}

export default Component;
