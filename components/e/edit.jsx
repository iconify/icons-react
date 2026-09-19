import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8g8qlfld.css';
import '../../css/a/a50et0bgu.css';
import '../../css/q/q-6bg4l5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8g8qlfld"/><path class="a50et0bgu"/><path class="q-6bg4l5x"/>`,
		"fallback": "ion:edit",
	});
}

export default Component;
