import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zrwac-b_a.css';
import '../../css/f/f2_66lwsz.css';
import '../../css/a/ac0eq3kar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zrwac-b_a"/><path class="f2_66lwsz"/><path class="ac0eq3kar"/></g>`,
		"fallback": "hugeicons:image-not-found-02",
	});
}

export default Component;
