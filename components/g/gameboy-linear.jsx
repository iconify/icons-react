import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aymhwhb8v.css';
import '../../css/e/er5hmdbdf.css';
import '../../css/r/rn5innbyw.css';
import '../../css/k/klcdbfe3f.css';
import '../../css/c/cz3jkzutv.css';
import '../../css/z/zhbw671gb.css';
import '../../css/l/lkjawhb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aymhwhb8v"/><path class="er5hmdbdf"/><path class="rn5innbyw"/><path class="klcdbfe3f"/><path class="cz3jkzutv"/><path class="zhbw671gb"/><path class="lkjawhb3k"/></g>`,
		"fallback": "solar:gameboy-linear",
	});
}

export default Component;
