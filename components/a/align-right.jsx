import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz4f9wtxr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz4f9wtxr"/>`,
		"fallback": "streamline-color:align-right",
	});
}

export default Component;
