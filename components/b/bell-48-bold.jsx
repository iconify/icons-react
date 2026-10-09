import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onr3s4yih.css';
import '../../css/v/vc5zz0hzs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onr3s4yih"/><path class="vc5zz0hzs"/>`,
		"fallback": "energy-icons:bell-48-bold",
	});
}

export default Component;
