import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffjwj8xkz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffjwj8xkz"/>`,
		"fallback": "streamline-plump:circle-clock-solid",
	});
}

export default Component;
