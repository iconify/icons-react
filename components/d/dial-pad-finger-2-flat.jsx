import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1hvdvbrh.css';
import '../../css/n/n1f3ptbtz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n1hvdvbrh"/><path class="n1f3ptbtz"/></g>`,
		"fallback": "streamline-plump-color:dial-pad-finger-2-flat",
	});
}

export default Component;
