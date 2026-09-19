import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9y5-zbbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9y5-zbbv"/>`,
		"fallback": "healthicons:colorectal-cancer-outline",
	});
}

export default Component;
