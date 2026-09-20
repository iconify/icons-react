import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me5ba80yv.css';
import '../../css/v/v0x7igbyg.css';
import '../../css/s/sp3kom_ya.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="me5ba80yv"><path class="v0x7igbyg"/><path class="sp3kom_ya"/></g>`,
		"fallback": "streamline-plump-color:ampersand",
	});
}

export default Component;
