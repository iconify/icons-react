import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dezwopb-j.css';
import '../../css/i/im6_9vhgw.css';
import '../../css/r/rfgrjcbjr.css';
import '../../css/q/qel2yy7gu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dezwopb-j"/><path class="im6_9vhgw"/><path class="rfgrjcbjr"/><path class="qel2yy7gu"/>`,
		"fallback": "energy-icons:file-spreadsheet-48",
	});
}

export default Component;
