import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b68xxsbdc.css';
import '../../css/q/qs2jqdb-s.css';
import '../../css/j/j46k23i9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b68xxsbdc"/><path class="qs2jqdb-s"/><path class="j46k23i9m"/>`,
		"fallback": "energy-icons:dna-48",
	});
}

export default Component;
