import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1di2nq9t.css';
import '../../css/q/q4vtdtwun.css';
import '../../css/p/p7kyn66pi.css';
import '../../css/m/moupylo6e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1di2nq9t"/><path class="q4vtdtwun"/><path class="p7kyn66pi"/><path class="moupylo6e"/>`,
		"fallback": "energy-icons:ev-charger-48",
	});
}

export default Component;
