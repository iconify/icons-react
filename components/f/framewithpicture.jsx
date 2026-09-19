import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4d54nbgi.css';
import '../../css/n/nvnb2yl3l.css';
import '../../css/s/s164q9ezg.css';
import '../../css/s/s6ol5ccju.css';
import '../../css/j/j5lzypbjv.css';
import '../../css/k/kea0dyb4k.css';
import '../../css/o/oq7lg2blo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4d54nbgi"/><path class="nvnb2yl3l"/><path class="s164q9ezg"/><path class="s6ol5ccju"/><path class="j5lzypbjv"/><circle class="kea0dyb4k"/><path class="oq7lg2blo"/>`,
		"fallback": "fxemoji:framewithpicture",
	});
}

export default Component;
