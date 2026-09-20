import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm80i3cgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm80i3cgo"/>`,
		"fallback": "reicon:frame2",
	});
}

export default Component;
