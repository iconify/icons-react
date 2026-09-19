import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sk4_933ij.css';
import '../../css/l/l230f71as.css';
import '../../css/o/opswthbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="sk4_933ij"/><path class="l230f71as"/><path class="opswthbui"/></g>`,
		"fallback": "bitcoin-icons:gift-outline",
	});
}

export default Component;
