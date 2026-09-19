import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj_2eeb-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj_2eeb-k"/>`,
		"fallback": "healthicons:heart-cardiogram",
	});
}

export default Component;
