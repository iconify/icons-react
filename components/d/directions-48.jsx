import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9v47kbel.css';
import '../../css/e/e8kp6ybjw.css';
import '../../css/o/o9b-4cbec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9v47kbel"/><path class="e8kp6ybjw"/><path class="o9b-4cbec"/>`,
		"fallback": "energy-icons:directions-48",
	});
}

export default Component;
