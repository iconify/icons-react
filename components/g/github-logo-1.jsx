import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/faozekbyo.css';
import '../../css/g/gwo722bgu.css';
import '../../css/b/borv8hbul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="faozekbyo"/><path class="gwo722bgu"/><path class="borv8hbul"/></g>`,
		"fallback": "streamline-ultimate-color:github-logo-1",
	});
}

export default Component;
