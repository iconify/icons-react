import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk4bk_qwd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk4bk_qwd"/>`,
		"fallback": "whh:aperture",
	});
}

export default Component;
