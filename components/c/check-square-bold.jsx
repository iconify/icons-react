import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e11cv8b-r.css';
import '../../css/r/rgvk_601g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e11cv8b-r"/><path class="rgvk_601g"/>`,
		"fallback": "streamline-ultimate:check-square-bold",
	});
}

export default Component;
