import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eozqnqbsa.css';
import '../../css/s/sfahd8b6o.css';
import '../../css/y/yqczzybvf.css';
import '../../css/b/b8at60bmi.css';
import '../../css/m/mq8zgi3rl.css';
import '../../css/g/gwxtade-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eozqnqbsa"/><path class="sfahd8b6o"/><path class="yqczzybvf"/><path class="b8at60bmi"/><path class="mq8zgi3rl"/><path clip-rule="evenodd" class="gwxtade-e"/></g>`,
		"fallback": "solar:bluetooth-circle-bold",
	});
}

export default Component;
