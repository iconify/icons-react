import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzo5webma.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzo5webma"/>`,
		"fallback": "whh:addtolist",
	});
}

export default Component;
