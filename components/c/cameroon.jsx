import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-4cv_cxz.css';
import '../../css/v/v5r_03b1l.css';
import '../../css/r/rsodfxbti.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-4cv_cxz"/><path class="v5r_03b1l"/><path class="rsodfxbti"/>`,
		"fallback": "tabler-flags:cameroon",
	});
}

export default Component;
