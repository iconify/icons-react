import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdqw21o2b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdqw21o2b"/>`,
		"fallback": "healthicons:cpap-masks-outline",
	});
}

export default Component;
