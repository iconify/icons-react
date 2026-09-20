import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/fon8mmv6z.css';
import '../../css/w/w7z6jhbot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="fon8mmv6z"/><path class="w7z6jhbot"/></g>`,
		"fallback": "streamline-plump:bag",
	});
}

export default Component;
