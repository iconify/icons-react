import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs628n7li.css';
import '../../css/i/is5s5qqcb.css';
import '../../css/r/r5wz4ccht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs628n7li"/><path class="is5s5qqcb"/><path class="r5wz4ccht"/>`,
		"fallback": "energy-icons:bird-safe-48",
	});
}

export default Component;
