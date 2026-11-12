import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdt2tgb-r.css';
import '../../css/o/o922f4zod.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdt2tgb-r"/><path class="o922f4zod"/>`,
		"fallback": "selfhst:calagopus-dark",
	});
}

export default Component;
