import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bva9_bcop.css';
import '../../css/m/mkzt5foon.css';
import '../../css/h/h5vc_wttc.css';
import '../../css/n/n7mdeobel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bva9_bcop"/><path class="mkzt5foon"/><path class="h5vc_wttc"/><path class="n7mdeobel"/>`,
		"fallback": "uim:flip-h",
	});
}

export default Component;
