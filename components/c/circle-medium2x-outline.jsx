import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-qtcu_5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o-qtcu_5d"/>`,
		"fallback": "healthicons:circle-medium2x-outline",
	});
}

export default Component;
