import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhx0kvbbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhx0kvbbv"/>`,
		"fallback": "icon-park-solid:align-bottom-two",
	});
}

export default Component;
