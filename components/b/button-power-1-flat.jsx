import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0etbo8ve.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c0etbo8ve"/>`,
		"fallback": "streamline-color:button-power-1-flat",
	});
}

export default Component;
