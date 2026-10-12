import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt-0alp2o.css';
import '../../css/q/qrldk9bjb.css';
import '../../css/i/iqpkuk7ec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt-0alp2o"/><path class="qrldk9bjb"/><path class="iqpkuk7ec"/>`,
		"fallback": "energy-icons:house-minus-48-bold",
	});
}

export default Component;
