import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqvm3jumk.css';
import '../../css/x/x2fozm4ep.css';
import '../../css/f/fqwabbb6w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqvm3jumk"/><path class="x2fozm4ep"/><path class="fqwabbb6w"/>`,
		"fallback": "flat-color-icons:business",
	});
}

export default Component;
