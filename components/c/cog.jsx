import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vxo3gieyf.css';
import '../../css/o/o2evp6bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vxo3gieyf"/><path class="o2evp6bma"/></g>`,
		"fallback": "streamline-sharp:cog",
	});
}

export default Component;
