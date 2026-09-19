import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh27cfbxj.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh27cfbxj"/>`,
		"fallback": "whh:alarm",
	});
}

export default Component;
