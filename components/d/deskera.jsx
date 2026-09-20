import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovsu6pbuo.css';

const viewBox = {"width":458,"height":96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovsu6pbuo"/>`,
		"fallback": "thesvg-color:deskera",
	});
}

export default Component;
