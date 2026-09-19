import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghy45sw0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghy45sw0f"/>`,
		"fallback": "gg:facebook",
	});
}

export default Component;
