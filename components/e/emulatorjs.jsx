import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koxstha1f.css';
import '../../css/v/vpp78ggra.css';
import '../../css/w/w2y3zvo5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koxstha1f"/><path class="vpp78ggra"/><path class="w2y3zvo5w"/>`,
		"fallback": "selfhst:emulatorjs",
	});
}

export default Component;
