import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/du0gjo9ab.css';
import '../../css/m/mk1upqadn.css';
import '../../css/b/bspdocllg.css';
import '../../css/y/yil4lzb_o.css';
import '../../css/d/dbaxyl7jh.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="du0gjo9ab wm-shadow"/><path class="mk1upqadn"/><path class="bspdocllg"/><path class="yil4lzb_o"/><path class="dbaxyl7jh wm-shine"/><path class="qef_sobyj wm-deco"/></g>`,
		"fallback": "withicons-sticker:glass-water",
	});
}

export default Component;
