import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg5j7n9re.css';
import '../../css/z/z_89wg1-o.css';
import '../../css/p/pnrrn11uc.css';
import '../../css/e/eil3eqh2u.css';
import '../../css/h/hfw2nxbqa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg5j7n9re"/><path class="z_89wg1-o"/><path class="pnrrn11uc"/><path class="eil3eqh2u"/><path class="hfw2nxbqa"/>`,
		"fallback": "selfhst:apple-homekit",
	});
}

export default Component;
