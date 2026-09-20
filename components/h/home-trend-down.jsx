import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/utgs_bbxu.css';
import '../../css/r/rc9hhabvi.css';
import '../../css/c/cdnnv50mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="utgs_bbxu"/><path class="rc9hhabvi"/><path class="cdnnv50mv"/></g>`,
		"fallback": "reicon:home-trend-down",
	});
}

export default Component;
