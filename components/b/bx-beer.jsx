import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm4e34bbn.css';
import '../../css/j/jab1lr5xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm4e34bbn"/><path class="jab1lr5xd"/>`,
		"fallback": "bx:bx-beer",
	});
}

export default Component;
