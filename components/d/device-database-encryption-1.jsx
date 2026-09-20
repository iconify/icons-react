import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/b-lh80b2h.css';
import '../../css/s/sk5l3e6xg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="b-lh80b2h"/><path class="sk5l3e6xg"/></g>`,
		"fallback": "streamline-plump:device-database-encryption-1",
	});
}

export default Component;
