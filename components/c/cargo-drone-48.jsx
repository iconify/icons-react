import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x544oac-s.css';
import '../../css/j/jatki5qtj.css';
import '../../css/y/ya3rincjc.css';
import '../../css/y/yp0n6ibvk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x544oac-s"/><path class="jatki5qtj"/><path class="ya3rincjc"/><path class="yp0n6ibvk"/>`,
		"fallback": "energy-icons:cargo-drone-48",
	});
}

export default Component;
