import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tht13fb0t.css';
import '../../css/d/d9xo1bc7m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tht13fb0t"/><path class="d9xo1bc7m"/>`,
		"fallback": "energy-icons:chainsaw-48",
	});
}

export default Component;
