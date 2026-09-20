import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l93a6mbpp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l93a6mbpp"/>`,
		"fallback": "streamline-flex:end-point-diamond-solid",
	});
}

export default Component;
