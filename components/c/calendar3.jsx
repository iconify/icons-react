import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a6n0xibwq.css';
import '../../css/a/ajqhpcbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a6n0xibwq"/><path class="ajqhpcbca"/></g>`,
		"fallback": "reicon:calendar3",
	});
}

export default Component;
