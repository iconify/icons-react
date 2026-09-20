import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/too0zm2ef.css';
import '../../css/r/rda75p-5s.css';
import '../../css/y/yzpjxzhlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="too0zm2ef"/><path class="rda75p-5s"/><path class="yzpjxzhlg"/></g>`,
		"fallback": "reicon:bicycle",
	});
}

export default Component;
