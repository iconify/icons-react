import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/l/lzbatc_9j.css';
import '../../css/l/lxrw5jj0s.css';
import '../../css/g/gv0azuakx.css';
import '../../css/n/n9cednr3v.css';
import '../../css/i/i484g39xv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="lzbatc_9j"/><path class="lxrw5jj0s"/><path class="gv0azuakx"/><path class="n9cednr3v"/><path class="i484g39xv"/>`,
		"fallback": "fxemoji:grimacing",
	});
}

export default Component;
