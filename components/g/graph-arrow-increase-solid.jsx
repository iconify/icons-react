import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjp1e-b0z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sjp1e-b0z"/>`,
		"fallback": "streamline:graph-arrow-increase-solid",
	});
}

export default Component;
