import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a6n0xibwq.css';
import '../../css/a/accmu0ugj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a6n0xibwq"/><path class="accmu0ugj"/></g>`,
		"fallback": "reicon:calendar4",
	});
}

export default Component;
