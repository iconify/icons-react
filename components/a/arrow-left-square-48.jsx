import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx2xmtbjn.css';
import '../../css/m/m3eum-q9t.css';
import '../../css/s/snfihfbzf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx2xmtbjn"/><path class="m3eum-q9t"/><path class="snfihfbzf"/>`,
		"fallback": "energy-icons:arrow-left-square-48",
	});
}

export default Component;
