import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bus69jdjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bus69jdjz"/>`,
		"fallback": "mingcute:folder-infor-line",
	});
}

export default Component;
