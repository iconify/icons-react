import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fac77ybxs.css';
import '../../css/t/t8vk-tb8q.css';
import '../../css/d/dubtynb3x.css';
import '../../css/k/kjsap28da.css';
import '../../css/p/p8qxhujil.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fac77ybxs"/><path class="t8vk-tb8q"/><path class="dubtynb3x"/><path class="kjsap28da"/><path class="p8qxhujil"/>`,
		"fallback": "fxemoji:foxgrin",
	});
}

export default Component;
