import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jjzfngbyw.css';
import '../../css/v/v0_9vkbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jjzfngbyw"/><path class="v0_9vkbfk"/></g>`,
		"fallback": "reicon:gallery-slash",
	});
}

export default Component;
