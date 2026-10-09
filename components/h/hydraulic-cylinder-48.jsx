import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9og61b7p.css';
import '../../css/y/yftb-1bif.css';
import '../../css/p/pzgm9abmy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9og61b7p"/><path class="yftb-1bif"/><path class="pzgm9abmy"/>`,
		"fallback": "energy-icons:hydraulic-cylinder-48",
	});
}

export default Component;
