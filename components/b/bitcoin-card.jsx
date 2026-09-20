import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qdd9k55bw.css';
import '../../css/g/gtr9mcbgh.css';
import '../../css/n/n_5_uwbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qdd9k55bw"/><path class="gtr9mcbgh"/><path class="n_5_uwbjy"/></g>`,
		"fallback": "reicon:bitcoin-card",
	});
}

export default Component;
