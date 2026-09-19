import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cjjcpobno.css';
import '../../css/k/k_3ix9bgg.css';
import '../../css/g/g28kjg67v.css';
import '../../css/c/c_fvkgzvl.css';
import '../../css/d/dehi7cb_m.css';
import '../../css/q/qz45febvd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cjjcpobno"/><path class="k_3ix9bgg"/><path class="g28kjg67v"/><path class="c_fvkgzvl"/><path class="dehi7cb_m"/><path class="qz45febvd"/></g>`,
		"fallback": "fluent-emoji-flat:flying-saucer",
	});
}

export default Component;
