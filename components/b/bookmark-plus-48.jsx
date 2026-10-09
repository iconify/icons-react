import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsiaoacww.css';
import '../../css/p/pe35xebhe.css';
import '../../css/u/um7q16f0g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsiaoacww"/><path class="pe35xebhe"/><path class="um7q16f0g"/>`,
		"fallback": "energy-icons:bookmark-plus-48",
	});
}

export default Component;
