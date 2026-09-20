import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/z/zcqpw-bie.css';
import '../../css/s/sgbntkbqv.css';
import '../../css/d/dzj-pac0y.css';
import '../../css/j/j02jjxvbk.css';
import '../../css/o/ohb9m9k_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="zcqpw-bie"/><path class="sgbntkbqv"/><path class="dzj-pac0y"/><path class="j02jjxvbk"/><path class="ohb9m9k_z"/></g>`,
		"fallback": "solar:floor-lamp-linear",
	});
}

export default Component;
