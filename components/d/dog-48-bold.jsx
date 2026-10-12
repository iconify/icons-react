import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibdu4nf8k.css';
import '../../css/s/s_4tnnghm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibdu4nf8k"/><path class="s_4tnnghm"/>`,
		"fallback": "energy-icons:dog-48-bold",
	});
}

export default Component;
