import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9o2spbcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f9o2spbcm"/>`,
		"fallback": "healthicons:0-outline",
	});
}

export default Component;
