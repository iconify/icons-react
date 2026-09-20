import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c9jk34b7w.css';
import '../../css/k/kkr2msb_w.css';
import '../../css/t/tbfod3hgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c9jk34b7w"/><path class="kkr2msb_w"/><rect class="tbfod3hgq"/></g>`,
		"fallback": "mage:arrow-up-right-square",
	});
}

export default Component;
