import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5e5ikb2t.css';
import '../../css/w/w07hk-pry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5e5ikb2t"/><path class="w07hk-pry"/>`,
		"fallback": "boxicons:avocado",
	});
}

export default Component;
