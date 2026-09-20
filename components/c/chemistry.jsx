import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldfkool1f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldfkool1f"/>`,
		"fallback": "simple-line-icons:chemistry",
	});
}

export default Component;
