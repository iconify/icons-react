import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/uo8xz9hve.css';
import '../../css/y/yeqzvu9wl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="uo8xz9hve"/><path class="yeqzvu9wl"/></g>`,
		"fallback": "streamline-plump:ball",
	});
}

export default Component;
