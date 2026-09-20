import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lutm0h89d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lutm0h89d"/>`,
		"fallback": "tabler:http-post-off",
	});
}

export default Component;
