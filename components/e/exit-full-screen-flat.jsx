import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxwfg76-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fxwfg76-r"/>`,
		"fallback": "streamline-plump-color:exit-full-screen-flat",
	});
}

export default Component;
