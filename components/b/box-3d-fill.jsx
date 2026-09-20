import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmm6kfbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmm6kfbbq"/>`,
		"fallback": "mage:box-3d-fill",
	});
}

export default Component;
