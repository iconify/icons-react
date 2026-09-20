import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vge3bee0d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vge3bee0d"/>`,
		"fallback": "streamline-plump:cherries-solid",
	});
}

export default Component;
