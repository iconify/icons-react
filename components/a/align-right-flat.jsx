import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmfvf21cp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vmfvf21cp"/>`,
		"fallback": "streamline-plump-color:align-right-flat",
	});
}

export default Component;
