import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p00qr2apg.css';
import '../../css/b/b3og-kupp.css';
import '../../css/u/u4rzombrs.css';
import '../../css/l/lusnl1b9v.css';
import '../../css/k/koluruhol.css';
import '../../css/a/ak7me7bwj.css';
import '../../css/f/f4vxc-b0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="p00qr2apg"/><path class="b3og-kupp"/><path class="u4rzombrs"/><path class="lusnl1b9v"/><circle class="koluruhol"/><path class="ak7me7bwj"/><path class="f4vxc-b0f"/>`,
		"fallback": "fxemoji:directhit",
	});
}

export default Component;
