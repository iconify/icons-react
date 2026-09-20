import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c5stiqb0u.css';
import '../../css/a/arkya8uwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c5stiqb0u"/><path class="arkya8uwx"/></g>`,
		"fallback": "mage:bag-b",
	});
}

export default Component;
