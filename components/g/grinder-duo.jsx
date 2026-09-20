import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1afleut.css';
import '../../css/h/h067g9b7u.css';
import '../../css/l/lkryn-bwv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cz1afleut"/><path class="h067g9b7u"/><path clip-rule="evenodd" class="lkryn-bwv"/></g>`,
		"fallback": "streamline-kameleon-color:grinder-duo",
	});
}

export default Component;
