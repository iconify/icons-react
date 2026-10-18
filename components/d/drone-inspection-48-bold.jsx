import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w63goej-d.css';
import '../../css/z/zqrgw3bcs.css';
import '../../css/s/s1299sedn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w63goej-d"/><path class="zqrgw3bcs"/><path class="s1299sedn"/>`,
		"fallback": "energy-icons:drone-inspection-48-bold",
	});
}

export default Component;
