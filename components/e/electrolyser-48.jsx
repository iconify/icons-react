import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk8dzgglt.css';
import '../../css/e/eg02k6bgr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk8dzgglt"/><path class="eg02k6bgr"/>`,
		"fallback": "energy-icons:electrolyser-48",
	});
}

export default Component;
