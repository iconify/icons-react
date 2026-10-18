import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na8f76bbp.css';
import '../../css/q/qoebn-0by.css';
import '../../css/v/v7mvibbpy.css';
import '../../css/t/tnen5db4c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na8f76bbp"/><path class="qoebn-0by"/><path class="v7mvibbpy"/><path class="tnen5db4c"/>`,
		"fallback": "energy-icons:battery-cooling-48",
	});
}

export default Component;
