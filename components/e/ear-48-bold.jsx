import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahc0lbi7g.css';
import '../../css/o/o0xkmj82y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahc0lbi7g"/><path class="o0xkmj82y"/>`,
		"fallback": "energy-icons:ear-48-bold",
	});
}

export default Component;
