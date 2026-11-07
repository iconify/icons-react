import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqccwibwr.css';
import '../../css/b/b09xyt_lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqccwibwr"/><path class="b09xyt_lu"/>`,
		"fallback": "solar:flame-bold-duotone",
	});
}

export default Component;
