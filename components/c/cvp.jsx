import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwk_lb6to.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwk_lb6to"/>`,
		"fallback": "token:cvp",
	});
}

export default Component;
