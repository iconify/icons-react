import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esy24bk8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esy24bk8c"/>`,
		"fallback": "simple-icons:daserste",
	});
}

export default Component;
