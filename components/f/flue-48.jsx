import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghoh098lm.css';
import '../../css/n/nyhx7fbbv.css';
import '../../css/z/zxrbw5bpz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghoh098lm"/><path class="nyhx7fbbv"/><path class="zxrbw5bpz"/>`,
		"fallback": "energy-icons:flue-48",
	});
}

export default Component;
