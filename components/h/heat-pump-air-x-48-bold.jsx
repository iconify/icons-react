import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm13-txuu.css';
import '../../css/d/dhdywzrps.css';
import '../../css/l/lo-76q32a.css';
import '../../css/h/hfkbjdban.css';
import '../../css/c/c3xvfibhp.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/i/iuv5z4b4l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm13-txuu"/><path class="dhdywzrps"/><path class="lo-76q32a"/><path class="hfkbjdban"/><path class="c3xvfibhp"/><path class="sfb8rqn9v"/><path class="iuv5z4b4l"/>`,
		"fallback": "energy-icons:heat-pump-air-x-48-bold",
	});
}

export default Component;
