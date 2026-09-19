import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um721dv4z.css';
import '../../css/w/w96bn_bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um721dv4z"/><path class="w96bn_bsq"/>`,
		"fallback": "boxicons:duck",
	});
}

export default Component;
