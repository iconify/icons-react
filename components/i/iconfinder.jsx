import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lupkgv2gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lupkgv2gm"/>`,
		"fallback": "thesvg-color:iconfinder",
	});
}

export default Component;
