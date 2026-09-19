import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di3t_vcmc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="di3t_vcmc"/>`,
		"fallback": "healthicons:chart-pie",
	});
}

export default Component;
