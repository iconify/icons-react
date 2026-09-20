import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/in6eljbub.css';
import '../../css/k/ka7ja9bqm.css';
import '../../css/i/ix42ztqvi.css';
import '../../css/w/wbrxz8bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="in6eljbub"/><path class="ka7ja9bqm"/><path class="ix42ztqvi"/><path class="wbrxz8bqk"/></g>`,
		"fallback": "reicon:brifecase-tick",
	});
}

export default Component;
