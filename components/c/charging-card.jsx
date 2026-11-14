import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ibd-53qeo.css';
import '../../css/x/xjm_pacui.css';
import '../../css/u/u3h2dubyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="ibd-53qeo"/><path class="xjm_pacui"/><path class="u3h2dubyj"/></g>`,
		"fallback": "evicons:charging-card",
	});
}

export default Component;
