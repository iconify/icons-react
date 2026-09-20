import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sovpxqy4m.css';
import '../../css/m/m9dxpvbzj.css';
import '../../css/c/cyi373zjp.css';
import '../../css/f/facsxjpvx.css';
import '../../css/g/gf_k14iap.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sovpxqy4m"/><path class="m9dxpvbzj"/><path class="cyi373zjp"/><path class="facsxjpvx"/><path class="gf_k14iap"/></g>`,
		"fallback": "streamline-color:blood-bag-donation",
	});
}

export default Component;
