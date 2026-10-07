import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v7svy8bvx.css';
import '../../css/z/zilprabad.css';
import '../../css/b/b92w5yz7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v7svy8bvx"/><path class="zilprabad"/><path class="b92w5yz7y"/></g>`,
		"fallback": "iconoir:drag-hand-gesture",
	});
}

export default Component;
