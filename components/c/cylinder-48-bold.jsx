import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxzbu2mcp.css';
import '../../css/l/lz8x8jbji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxzbu2mcp"/><path class="lz8x8jbji"/>`,
		"fallback": "energy-icons:cylinder-48-bold",
	});
}

export default Component;
