import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljyhemvfh.css';
import '../../css/o/oigxjx0ho.css';
import '../../css/m/m8j-0ru9v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljyhemvfh"/><path class="oigxjx0ho"/><path class="m8j-0ru9v"/>`,
		"fallback": "flat-color-icons:factory",
	});
}

export default Component;
