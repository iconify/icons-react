import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw3x_bcqz.css';
import '../../css/f/fyq898vwm.css';
import '../../css/v/vst_-y9mq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw3x_bcqz"/><path class="fyq898vwm"/><path class="vst_-y9mq"/>`,
		"fallback": "energy-icons:current-source-48",
	});
}

export default Component;
