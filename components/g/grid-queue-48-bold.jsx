import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb3conbjb.css';
import '../../css/x/x1p0svkkr.css';
import '../../css/b/bf52ribiq.css';
import '../../css/x/x3z57-byv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb3conbjb"/><path class="x1p0svkkr"/><path class="bf52ribiq"/><path class="x3z57-byv"/>`,
		"fallback": "energy-icons:grid-queue-48-bold",
	});
}

export default Component;
