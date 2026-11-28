import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toc5u-bdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toc5u-bdg"/>`,
		"fallback": "iconaut:image-plus-solid",
	});
}

export default Component;
