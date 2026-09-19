import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvp1kxbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvp1kxbrq"/>`,
		"fallback": "hugeicons:ice-cubes",
	});
}

export default Component;
