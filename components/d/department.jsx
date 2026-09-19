import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjcnosa2s.css';
import '../../css/i/i7hjkjq5j.css';
import '../../css/e/esibc_bpa.css';
import '../../css/b/bdrvyebhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjcnosa2s"/><path class="i7hjkjq5j"/><path class="esibc_bpa"/><path class="bdrvyebhx"/>`,
		"fallback": "flat-color-icons:department",
	});
}

export default Component;
