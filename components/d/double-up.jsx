import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7eutrbqx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7eutrbqx"/>`,
		"fallback": "icon-park-outline:double-up",
	});
}

export default Component;
