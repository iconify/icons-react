import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b7u8biprd.css';
import '../../css/a/a1d_fdc0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b7u8biprd"/><path class="a1d_fdc0s"/></g>`,
		"fallback": "reicon:arrow-left3",
	});
}

export default Component;
