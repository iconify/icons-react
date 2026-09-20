import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb0ntgzah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb0ntgzah"/>`,
		"fallback": "tabler:api-app",
	});
}

export default Component;
