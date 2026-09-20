import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/g/gcvw7cieq.css';
import '../../css/s/stydhp2ni.css';
import '../../css/u/u88gntbpd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="gcvw7cieq"/><path class="stydhp2ni"/><path class="u88gntbpd"/></g>`,
		"fallback": "streamline-plump:chef-toque-hat",
	});
}

export default Component;
