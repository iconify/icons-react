import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wulzfdbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wulzfdbva"/>`,
		"fallback": "thesvg-color:ile-de-france-mobilites",
	});
}

export default Component;
