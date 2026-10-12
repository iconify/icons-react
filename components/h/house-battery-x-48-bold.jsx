import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw_tfybwx.css';
import '../../css/w/w5lorqb0k.css';
import '../../css/k/kc_4boqkx.css';
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
		"content": `<path class="qw_tfybwx"/><path class="w5lorqb0k"/><path class="kc_4boqkx"/><path class="sfb8rqn9v"/><path class="iuv5z4b4l"/>`,
		"fallback": "energy-icons:house-battery-x-48-bold",
	});
}

export default Component;
