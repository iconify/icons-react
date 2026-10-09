import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xedufpf4g.css';
import '../../css/p/pfnbi-dgu.css';
import '../../css/r/rnwwcable.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xedufpf4g"/><path class="pfnbi-dgu"/><path class="rnwwcable"/>`,
		"fallback": "energy-icons:energy-trading-48",
	});
}

export default Component;
