import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7g3dsb1x.css';

const viewBox = {"width":32,"height":32,"left":1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7g3dsb1x"/>`,
		"fallback": "cryptocurrency:eop",
	});
}

export default Component;
