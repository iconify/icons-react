import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztey5v61a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztey5v61a"/>`,
		"fallback": "thesvg-color:denon",
	});
}

export default Component;
