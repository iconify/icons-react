import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oso_04bvg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oso_04bvg"/>`,
		"fallback": "healthicons:cpap-masks-outline",
	});
}

export default Component;
