import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr2nrvggc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jr2nrvggc"/>`,
		"fallback": "streamline-plump:airplane-disabled-solid",
	});
}

export default Component;
