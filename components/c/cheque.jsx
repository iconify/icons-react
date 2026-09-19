import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqyl0nvla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqyl0nvla"/>`,
		"fallback": "iconamoon:cheque",
	});
}

export default Component;
