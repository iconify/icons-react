import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s-2ens4al.css';
import '../../css/v/vjk9envcy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="s-2ens4al"/><path class="vjk9envcy"/></g>`,
		"fallback": "streamline-plump:add-bell-notification",
	});
}

export default Component;
