import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iuqvqwynj.css';
import '../../css/t/ti0uovb4m.css';
import '../../css/y/y6yajw26h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iuqvqwynj"/><path class="ti0uovb4m"/><path class="y6yajw26h"/></g>`,
		"fallback": "iconoir:add-keyframes",
	});
}

export default Component;
