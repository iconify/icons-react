import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5i0nibgo.css';
import '../../css/h/hmt9evbnn.css';
import '../../css/w/we9u0mx2s.css';
import '../../css/a/atyhtibwr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5i0nibgo"/><path class="hmt9evbnn"/><path class="we9u0mx2s"/><path class="atyhtibwr"/>`,
		"fallback": "energy-icons:corn-48",
	});
}

export default Component;
