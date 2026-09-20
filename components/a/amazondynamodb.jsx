import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxy2_nt0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxy2_nt0d"/>`,
		"fallback": "simple-icons:amazondynamodb",
	});
}

export default Component;
