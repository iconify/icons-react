import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k26-hfmon.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k26-hfmon"/>`,
		"fallback": "streamline-plump:arrow-cursor-1",
	});
}

export default Component;
