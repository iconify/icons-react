import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_2io5_mv.css';
import '../../css/c/ckipxtbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_2io5_mv"/><path class="ckipxtbbn"/>`,
		"fallback": "bx:chevrons-left",
	});
}

export default Component;
