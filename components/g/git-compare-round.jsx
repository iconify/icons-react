import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg9xddb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg9xddb7q"/>`,
		"fallback": "coolicons:git-compare-round",
	});
}

export default Component;
