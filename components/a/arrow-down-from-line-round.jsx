import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehfx4sj_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehfx4sj_c"/>`,
		"fallback": "coolicons:arrow-down-from-line-round",
	});
}

export default Component;
