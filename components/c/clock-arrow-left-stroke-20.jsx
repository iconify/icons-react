import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj2-olrwi.css';
import '../../css/z/z-s_bkbrl.css';
import '../../css/u/uus2tq10l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj2-olrwi"/><path class="z-s_bkbrl"/><path class="uus2tq10l"/>`,
		"fallback": "garden:clock-arrow-left-stroke-20",
	});
}

export default Component;
