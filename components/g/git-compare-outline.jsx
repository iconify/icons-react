import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn8l_w7lg.css';
import '../../css/o/ovur0mx_t.css';
import '../../css/t/tukbs_u6b.css';
import '../../css/t/twvlgd5yp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn8l_w7lg"/><circle class="ovur0mx_t"/><circle class="tukbs_u6b"/><path class="twvlgd5yp"/>`,
		"fallback": "famicons:git-compare-outline",
	});
}

export default Component;
