import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bji1-u9xf.css';
import '../../css/w/wuqcbyrvq.css';
import '../../css/a/a_99z_b0t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bji1-u9xf"/><path class="wuqcbyrvq"/><path class="a_99z_b0t"/>`,
		"fallback": "energy-icons:blade-transport-20",
	});
}

export default Component;
