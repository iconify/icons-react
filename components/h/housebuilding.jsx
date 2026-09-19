import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlvxw3hte.css';
import '../../css/d/da6ztxmpl.css';
import '../../css/z/zu4ejlbwd.css';
import '../../css/y/yk034wb1n.css';
import '../../css/o/oi82tgsgv.css';
import '../../css/k/k9n_e-pxa.css';
import '../../css/s/su6t9-mra.css';
import '../../css/c/cwvlx6ibt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlvxw3hte"/><path class="da6ztxmpl"/><path class="zu4ejlbwd"/><path class="yk034wb1n"/><path class="oi82tgsgv"/><path class="k9n_e-pxa"/><path class="su6t9-mra"/><path class="cwvlx6ibt"/>`,
		"fallback": "fxemoji:housebuilding",
	});
}

export default Component;
