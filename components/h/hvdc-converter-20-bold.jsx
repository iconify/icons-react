import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqo5_yb0w.css';
import '../../css/k/kut36cotc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqo5_yb0w"/><path class="kut36cotc"/>`,
		"fallback": "energy-icons:hvdc-converter-20-bold",
	});
}

export default Component;
