import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai0rfpb_k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ai0rfpb_k"/>`,
		"fallback": "streamline-color:graph-arrow-decrease-flat",
	});
}

export default Component;
