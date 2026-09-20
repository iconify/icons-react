import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-z8v6bjf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-z8v6bjf"/>`,
		"fallback": "streamline-plump:clean-broom-wipe-solid",
	});
}

export default Component;
