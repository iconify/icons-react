import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9rrn-bjw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s9rrn-bjw"/>`,
		"fallback": "streamline-plump:calculator-1-solid",
	});
}

export default Component;
