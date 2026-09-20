import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/km205tb8l.css';
import '../../css/g/g40w6uq8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="km205tb8l"/><path class="g40w6uq8w"/></g>`,
		"fallback": "reicon:hashtag-up",
	});
}

export default Component;
