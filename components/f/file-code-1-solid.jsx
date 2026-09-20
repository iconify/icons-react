import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-x1i7szn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s-x1i7szn"/>`,
		"fallback": "streamline-flex:file-code-1-solid",
	});
}

export default Component;
