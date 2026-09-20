import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0wz0cc8p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0wz0cc8p"/>`,
		"fallback": "streamline-plump:airplane-enabled",
	});
}

export default Component;
