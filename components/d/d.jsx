import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yolz4bbbs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yolz4bbbs"/>`,
		"fallback": "catppuccin:d",
	});
}

export default Component;
