import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuqr6acyi.css';
import '../../css/b/bp937cc8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuqr6acyi"/><path class="bp937cc8x"/>`,
		"fallback": "energy-icons:battery-fire-48",
	});
}

export default Component;
