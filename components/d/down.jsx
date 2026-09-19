import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yldf2lb4f.css';

const viewBox = {"width":717,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yldf2lb4f"/>`,
		"fallback": "ls:down",
	});
}

export default Component;
