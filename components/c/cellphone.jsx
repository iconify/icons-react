import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmg769b0b.css';
import '../../css/p/p_7n5y-dj.css';
import '../../css/i/ib5trylwt.css';
import '../../css/l/lnkztgboy.css';
import '../../css/o/oo-p8yb3o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmg769b0b"/><path class="p_7n5y-dj"/><path class="ib5trylwt"/><path class="lnkztgboy"/><path class="oo-p8yb3o"/>`,
		"fallback": "fxemoji:cellphone",
	});
}

export default Component;
