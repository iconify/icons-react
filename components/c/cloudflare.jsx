import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo3h003kd.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo3h003kd"/>`,
		"fallback": "fontisto:cloudflare",
	});
}

export default Component;
