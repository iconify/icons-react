import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mi4bracaa.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/c/c02b__imu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mi4bracaa"/><path class="p9-zrkb4g"/><path class="c02b__imu"/></g>`,
		"fallback": "iconoir:emoji-surprise-alt",
	});
}

export default Component;
