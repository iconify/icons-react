import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo9pi9bir.css';
import '../../css/f/f5_zu-bul.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/d5a-axoez.css';
import '../../css/p/prv4iebuw.css';
import '../../css/a/aeb0jzmcy.css';
import '../../css/n/nvlo4nbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo9pi9bir"/><path class="f5_zu-bul"/><g class="xtpeb-edw"><path class="d5a-axoez"/><path class="prv4iebuw"/><path class="aeb0jzmcy"/><path class="nvlo4nbyy"/></g>`,
		"fallback": "solar:chair-2-bold-duotone",
	});
}

export default Component;
