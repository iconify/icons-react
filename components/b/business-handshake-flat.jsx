import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9a0gqbfm.css';
import '../../css/b/by7wdmmnq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9a0gqbfm"/><path clip-rule="evenodd" class="by7wdmmnq"/></g>`,
		"fallback": "streamline-color:business-handshake-flat",
	});
}

export default Component;
