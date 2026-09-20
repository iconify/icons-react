import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7m83wb8t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7m83wb8t"/>`,
		"fallback": "streamline:compsition-horizontal-solid",
	});
}

export default Component;
