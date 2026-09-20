import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otsew2bmh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="otsew2bmh"/>`,
		"fallback": "streamline:button-power-1-solid",
	});
}

export default Component;
