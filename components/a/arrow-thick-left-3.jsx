import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cc2khxrqp.css';
import '../../css/f/fbxiy60lh.css';
import '../../css/l/li0ze0bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cc2khxrqp"/><path class="fbxiy60lh"/><path class="li0ze0bie"/></g>`,
		"fallback": "streamline-ultimate-color:arrow-thick-left-3",
	});
}

export default Component;
