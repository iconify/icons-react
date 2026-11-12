import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mewn8jbsb.css';
import '../../css/l/l-3emlabv.css';
import '../../css/q/qekb1nb-r.css';
import '../../css/g/gxbioacqh.css';
import '../../css/c/cpiokdbke.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mewn8jbsb"/><path class="l-3emlabv"/><path class="qekb1nb-r"/><path class="gxbioacqh"/><path class="cpiokdbke"/>`,
		"fallback": "selfhst:automatic1111",
	});
}

export default Component;
