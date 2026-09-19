import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycs9h4bkb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycs9h4bkb"/>`,
		"fallback": "fa7-regular:face-dizzy",
	});
}

export default Component;
