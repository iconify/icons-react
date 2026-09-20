import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6f07cc4u.css';
import '../../css/f/fj-ipp45f.css';
import '../../css/g/gqos64b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v6f07cc4u"/><path class="fj-ipp45f"/><path class="gqos64b9z"/></g>`,
		"fallback": "mynaui:hand",
	});
}

export default Component;
