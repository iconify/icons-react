import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h06m-9fze.css';
import '../../css/y/y93y_olkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="h06m-9fze"/><path class="y93y_olkh"/></g>`,
		"fallback": "streamline-plump-color:end-point-diamond",
	});
}

export default Component;
