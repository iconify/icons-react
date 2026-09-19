import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcoa8gbfx.css';
import '../../css/c/cnkm8cblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcoa8gbfx"/><path class="cnkm8cblh"/>`,
		"fallback": "boxicons:baseball",
	});
}

export default Component;
