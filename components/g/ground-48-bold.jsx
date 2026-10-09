import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpggqk6re.css';
import '../../css/e/e75wleedx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpggqk6re"/><path class="e75wleedx"/>`,
		"fallback": "energy-icons:ground-48-bold",
	});
}

export default Component;
