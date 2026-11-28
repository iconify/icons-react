import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvatqfbfx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oa7twqs_h.css';
import '../../css/s/sg0bdz8_g.css';
import '../../css/l/ld_mji7jh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vvatqfbfx"/><g class="dt0cm9dhy primary"><path class="oa7twqs_h"/><path class="sg0bdz8_g"/><path class="ld_mji7jh"/></g>`,
		"fallback": "iconaut:candle-duo",
	});
}

export default Component;
