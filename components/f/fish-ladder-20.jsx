import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qae_zubij.css';
import '../../css/s/stlnhm10c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qae_zubij"/><path class="stlnhm10c"/>`,
		"fallback": "energy-icons:fish-ladder-20",
	});
}

export default Component;
