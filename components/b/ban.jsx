import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aexgi1bnv.css';

const viewBox = {"width":717,"height":718};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aexgi1bnv"/>`,
		"fallback": "ls:ban",
	});
}

export default Component;
