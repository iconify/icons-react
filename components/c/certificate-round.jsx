import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdy_6m8-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdy_6m8-s"/>`,
		"fallback": "coolicons:certificate-round",
	});
}

export default Component;
