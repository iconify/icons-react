import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t05wrwc2o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t05wrwc2o"/>`,
		"fallback": "streamline:hand-cursor-solid",
	});
}

export default Component;
