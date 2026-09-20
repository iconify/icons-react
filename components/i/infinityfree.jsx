import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztzffcc-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztzffcc-p"/>`,
		"fallback": "thesvg-color:infinityfree",
	});
}

export default Component;
