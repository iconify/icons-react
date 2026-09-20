import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iau3g_b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iau3g_b6k"/>`,
		"fallback": "tdesign:ferocious-filled",
	});
}

export default Component;
