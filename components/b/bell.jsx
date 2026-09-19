import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx0ku_hzf.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx0ku_hzf"/>`,
		"fallback": "fontisto:bell",
	});
}

export default Component;
