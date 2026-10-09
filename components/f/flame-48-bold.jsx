import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1y455t_n.css';
import '../../css/c/cqs0s2txc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1y455t_n"/><path class="cqs0s2txc"/>`,
		"fallback": "energy-icons:flame-48-bold",
	});
}

export default Component;
