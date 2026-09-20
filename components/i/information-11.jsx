import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxs5963tr.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxs5963tr"/>`,
		"fallback": "maki:information-11",
	});
}

export default Component;
