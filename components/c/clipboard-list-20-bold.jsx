import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0ne4_zha.css';
import '../../css/v/vltx34bzx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0ne4_zha"/><path class="vltx34bzx"/>`,
		"fallback": "energy-icons:clipboard-list-20-bold",
	});
}

export default Component;
