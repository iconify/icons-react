import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1oyp4uhi.css';
import '../../css/q/qyfd5ps_s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1oyp4uhi"/><path class="qyfd5ps_s"/>`,
		"fallback": "energy-icons:calculator-20",
	});
}

export default Component;
