import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvvf71v4s.css';
import '../../css/k/krurd6_gq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvvf71v4s"/><path class="krurd6_gq"/>`,
		"fallback": "energy-icons:flow-battery-48",
	});
}

export default Component;
