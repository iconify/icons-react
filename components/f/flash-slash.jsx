import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g8-xck6eq.css';
import '../../css/r/rsrhfac5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g8-xck6eq"/><path class="rsrhfac5n"/></g>`,
		"fallback": "reicon:flash-slash",
	});
}

export default Component;
