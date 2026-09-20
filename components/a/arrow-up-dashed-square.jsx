import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajm69e1wn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajm69e1wn"/>`,
		"fallback": "streamline-color:arrow-up-dashed-square",
	});
}

export default Component;
