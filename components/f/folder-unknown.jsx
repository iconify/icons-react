import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2wzsde8t.css';
import '../../css/v/vvok4-85l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p2wzsde8t"/><path class="vvok4-85l"/></g>`,
		"fallback": "hugeicons:folder-unknown",
	});
}

export default Component;
