import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb7cpkptq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb7cpkptq"/>`,
		"fallback": "simple-icons:chromatic",
	});
}

export default Component;
