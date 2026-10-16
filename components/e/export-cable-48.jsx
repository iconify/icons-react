import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oddsq5b1n.css';
import '../../css/h/htdwqnb8t.css';
import '../../css/z/z0n64jbsa.css';
import '../../css/d/d19e9sbid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oddsq5b1n"/><path class="htdwqnb8t"/><path class="z0n64jbsa"/><path class="d19e9sbid"/>`,
		"fallback": "energy-icons:export-cable-48",
	});
}

export default Component;
