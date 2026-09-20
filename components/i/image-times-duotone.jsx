import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz8c3l5-w.css';
import '../../css/i/in5h3dbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz8c3l5-w"/><path class="in5h3dbcv"/>`,
		"fallback": "stash:image-times-duotone",
	});
}

export default Component;
