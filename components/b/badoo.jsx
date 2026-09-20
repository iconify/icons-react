import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yevx04waz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yevx04waz"/>`,
		"fallback": "thesvg-color:badoo",
	});
}

export default Component;
