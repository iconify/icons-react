import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us8ih0gnw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us8ih0gnw"/>`,
		"fallback": "streamline-plump:cloud-off",
	});
}

export default Component;
