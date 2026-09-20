import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp4c9kzuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp4c9kzuv"/>`,
		"fallback": "thesvg-color:collabora-online",
	});
}

export default Component;
