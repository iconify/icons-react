import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/burqsaclr.css';
import '../../css/z/zslpuabll.css';
import '../../css/m/mxw0qifka.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="burqsaclr"/><path class="zslpuabll"/><path class="mxw0qifka"/>`,
		"fallback": "energy-icons:arrow-up-down-20",
	});
}

export default Component;
