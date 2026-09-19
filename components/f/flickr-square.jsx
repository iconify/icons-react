import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqw5sgesf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqw5sgesf"/>`,
		"fallback": "bxl:flickr-square",
	});
}

export default Component;
