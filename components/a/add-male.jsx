import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxw36h-hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxw36h-hz"/>`,
		"fallback": "hugeicons:add-male",
	});
}

export default Component;
