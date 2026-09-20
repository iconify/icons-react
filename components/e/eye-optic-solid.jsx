import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y599co5wi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y599co5wi"/>`,
		"fallback": "streamline-plump:eye-optic-solid",
	});
}

export default Component;
