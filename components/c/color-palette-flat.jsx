import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9nso0bqx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u9nso0bqx"/>`,
		"fallback": "streamline-color:color-palette-flat",
	});
}

export default Component;
