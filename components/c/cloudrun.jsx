import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmhrr5b1v.css';
import '../../css/z/z3v_axe2j.css';
import '../../css/l/lonnihb8q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmhrr5b1v"/><path class="z3v_axe2j"/><path class="lonnihb8q"/>`,
		"fallback": "devicon:cloudrun",
	});
}

export default Component;
