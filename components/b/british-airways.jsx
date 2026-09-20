import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whix8lsva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whix8lsva"/>`,
		"fallback": "thesvg-color:british-airways",
	});
}

export default Component;
