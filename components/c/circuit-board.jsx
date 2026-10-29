import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/c/cv6s5pbwf.css';
import '../../css/o/oo4_ehhca.css';
import '../../css/c/cdx3i5ugk.css';
import '../../css/e/ecxk7gbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="cv6s5pbwf"/><path class="oo4_ehhca"/><path class="cdx3i5ugk wm-shine"/><path class="ecxk7gbiv wm-deco"/></g>`,
		"fallback": "withicons-sticker:circuit-board",
	});
}

export default Component;
