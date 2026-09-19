import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvbubjb1v.css';
import '../../css/p/pj85_iwji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvbubjb1v"/><path class="pj85_iwji"/>`,
		"fallback": "bx:bxs-phone-incoming",
	});
}

export default Component;
