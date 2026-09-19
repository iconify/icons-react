import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/u25_k1blb.css';
import '../../css/w/w-e9scb0e.css';
import '../../css/t/t6zhvfh4h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="u25_k1blb"/><path class="w-e9scb0e"/><path class="t6zhvfh4h"/></g>`,
		"fallback": "icon-park:avocado-one",
	});
}

export default Component;
