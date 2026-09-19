import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtn5odbvy.css';
import '../../css/b/brskaivxf.css';
import '../../css/e/e7ssxkvyx.css';
import '../../css/k/kabzyy02x.css';
import '../../css/w/wd4k0dczr.css';
import '../../css/g/gzcl4lb8w.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 jtn5odbvy"/><circle class="brskaivxf clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 e7ssxkvyx"/><path class="clr-i-solid clr-i-solid-path-4 kabzyy02x"/><path class="clr-i-solid clr-i-solid-path-5 wd4k0dczr"/><path class="clr-i-solid clr-i-solid-path-6 gzcl4lb8w"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:campervan-solid",
	});
}

export default Component;
