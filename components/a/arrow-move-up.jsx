import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajdm0abav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajdm0abav"/>`,
		"fallback": "tabler:arrow-move-up",
	});
}

export default Component;
