import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ondxr3rdc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ondxr3rdc"/>`,
		"fallback": "streamline:christian-cross-1-solid",
	});
}

export default Component;
