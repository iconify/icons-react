import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq3vaoc0u.css';
import '../../css/w/wdqcz8b5z.css';
import '../../css/q/q-jgudcfn.css';
import '../../css/r/rm4n9vb7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq3vaoc0u"/><path class="wdqcz8b5z"/><path class="q-jgudcfn"/><path class="rm4n9vb7c"/>`,
		"fallback": "energy-icons:g-clamp-48-bold",
	});
}

export default Component;
