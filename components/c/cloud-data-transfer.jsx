import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbnt46byn.css';
import '../../css/e/ettm1db8d.css';
import '../../css/w/w3qym623v.css';
import '../../css/i/idtlix8ae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbnt46byn"/><path class="ettm1db8d"/><path class="w3qym623v"/><path class="idtlix8ae"/></g>`,
		"fallback": "streamline-ultimate-color:cloud-data-transfer",
	});
}

export default Component;
