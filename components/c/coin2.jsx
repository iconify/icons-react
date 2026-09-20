import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wu8sl1cyn.css';
import '../../css/s/sz1xotiyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wu8sl1cyn"/><path class="sz1xotiyd"/></g>`,
		"fallback": "reicon:coin2",
	});
}

export default Component;
