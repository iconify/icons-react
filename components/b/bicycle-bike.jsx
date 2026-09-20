import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qaghrdi4p.css';
import '../../css/x/xcq-4cmff.css';
import '../../css/y/y039xzmpo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qaghrdi4p"/><path class="xcq-4cmff"/><path class="y039xzmpo"/></g>`,
		"fallback": "streamline-color:bicycle-bike",
	});
}

export default Component;
