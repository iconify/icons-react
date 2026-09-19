import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhsep8akp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jhsep8akp"/>`,
		"fallback": "healthicons:7-outline",
	});
}

export default Component;
