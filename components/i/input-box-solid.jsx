import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp5wc9bzh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cp5wc9bzh"/>`,
		"fallback": "streamline-flex:input-box-solid",
	});
}

export default Component;
