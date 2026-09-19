import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alwq3rdnn.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alwq3rdnn"/>`,
		"fallback": "fontisto:horizon",
	});
}

export default Component;
