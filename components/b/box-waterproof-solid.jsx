import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwuw6ub8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qwuw6ub8d"/>`,
		"fallback": "streamline-plump:box-waterproof-solid",
	});
}

export default Component;
