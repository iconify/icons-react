import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih0_ebcle.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ih0_ebcle"/>`,
		"fallback": "healthicons:arm-circumference-outline",
	});
}

export default Component;
