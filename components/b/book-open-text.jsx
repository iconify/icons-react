import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnrjy8b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnrjy8b9j"/>`,
		"fallback": "lucide:book-open-text",
	});
}

export default Component;
