import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su61edt6v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="su61edt6v"/>`,
		"fallback": "streamline:expand-window-2-solid",
	});
}

export default Component;
