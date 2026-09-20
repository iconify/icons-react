import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5_s4_b4r.css';
import '../../css/i/iukkl9xoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5_s4_b4r"/><path class="iukkl9xoe"/>`,
		"fallback": "token:10set",
	});
}

export default Component;
