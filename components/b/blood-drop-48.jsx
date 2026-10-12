import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsu7h-b-q.css';
import '../../css/s/sn3j5vz1q.css';
import '../../css/c/c4_zttl1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsu7h-b-q"/><path class="sn3j5vz1q"/><path class="c4_zttl1w"/>`,
		"fallback": "energy-icons:blood-drop-48",
	});
}

export default Component;
