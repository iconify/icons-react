import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk58jbbtr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xk58jbbtr"/>`,
		"fallback": "streamline-plump:galaxy-2-solid",
	});
}

export default Component;
