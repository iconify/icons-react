import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbsst6bep.css';
import '../../css/h/h7gro1emj.css';
import '../../css/r/r3sjlmblr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbsst6bep"/><path class="h7gro1emj"/><path class="r3sjlmblr"/>`,
		"fallback": "ep:coin",
	});
}

export default Component;
