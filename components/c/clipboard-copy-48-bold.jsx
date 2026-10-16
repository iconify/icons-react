import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u95e4sw8e.css';
import '../../css/l/la89sqemp.css';
import '../../css/d/d1s4subwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u95e4sw8e"/><path class="la89sqemp"/><path class="d1s4subwc"/>`,
		"fallback": "energy-icons:clipboard-copy-48-bold",
	});
}

export default Component;
