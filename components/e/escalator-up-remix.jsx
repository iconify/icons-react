import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmxc28bfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tmxc28bfz"/>`,
		"fallback": "streamline-plump:escalator-up-remix",
	});
}

export default Component;
