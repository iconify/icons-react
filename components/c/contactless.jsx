import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/selnm9byz.css';
import '../../css/s/shuzdrbmq.css';
import '../../css/g/gscjhdcqy.css';
import '../../css/d/dylr1oboi.css';
import '../../css/h/hhvqq6bpo.css';
import '../../css/e/e3rofhbax.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="selnm9byz wm-shadow"/><path class="shuzdrbmq"/><path class="gscjhdcqy"/><path class="dylr1oboi"/><path class="hhvqq6bpo wm-shine"/><path class="e3rofhbax wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`,
		"fallback": "withicons-sticker:contactless",
	});
}

export default Component;
