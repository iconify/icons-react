import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/btrssemwn.css';
import '../../css/r/rfhp48bur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="btrssemwn"/><path class="rfhp48bur"/></g>`,
		"fallback": "hugeicons:clock-check",
	});
}

export default Component;
