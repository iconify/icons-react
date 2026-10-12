import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlijh8b1j.css';
import '../../css/z/z-s_bkbrl.css';
import '../../css/n/n1_wm9fxc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlijh8b1j"/><path class="z-s_bkbrl"/><path class="n1_wm9fxc"/>`,
		"fallback": "garden:clock-arrow-right-stroke-20",
	});
}

export default Component;
