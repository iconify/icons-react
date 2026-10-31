import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsh2ghnfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsh2ghnfj"/>`,
		"fallback": "coolicons:heading-4-duotone-round",
	});
}

export default Component;
