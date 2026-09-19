import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt33t8g3j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt33t8g3j"/>`,
		"fallback": "healthicons:artificial-intelligence",
	});
}

export default Component;
