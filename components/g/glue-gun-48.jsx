import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycd8zvvjv.css';
import '../../css/c/c9il3frxy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycd8zvvjv"/><path class="c9il3frxy"/>`,
		"fallback": "energy-icons:glue-gun-48",
	});
}

export default Component;
