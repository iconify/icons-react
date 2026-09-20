import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfqth0sjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfqth0sjx"/>`,
		"fallback": "streamline-plump:flip-horizontal-circle-1",
	});
}

export default Component;
