import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me5ba80yv.css';
import '../../css/i/ihv0-0b1e.css';
import '../../css/k/kxow0ebrl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="me5ba80yv"><path class="ihv0-0b1e"/><path class="kxow0ebrl"/></g>`,
		"fallback": "streamline-plump-color:block-1",
	});
}

export default Component;
