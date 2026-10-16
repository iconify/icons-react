import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqowxovzl.css';
import '../../css/p/ppnqabcct.css';
import '../../css/u/ue8aopqvy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqowxovzl"/><path class="ppnqabcct"/><path class="ue8aopqvy"/>`,
		"fallback": "energy-icons:energy-island-48",
	});
}

export default Component;
