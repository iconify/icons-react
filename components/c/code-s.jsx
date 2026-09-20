import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm5xiid0k.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm5xiid0k"/>`,
		"fallback": "lineicons:code-s",
	});
}

export default Component;
