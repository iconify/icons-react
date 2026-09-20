import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovx-jb9nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovx-jb9nw"/>`,
		"fallback": "thesvg:continente",
	});
}

export default Component;
