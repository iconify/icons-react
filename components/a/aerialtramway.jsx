import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/camx-71ag.css';
import '../../css/h/hgi0e67ec.css';
import '../../css/t/tdew32b9y.css';
import '../../css/a/aal3comfa.css';
import '../../css/z/z0nl3vsbz.css';
import '../../css/k/k8c2nkb-r.css';
import '../../css/z/z5tyw7v_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="camx-71ag"/><path class="hgi0e67ec"/><path class="tdew32b9y"/><path class="aal3comfa"/><path class="z0nl3vsbz"/><path class="k8c2nkb-r"/><path class="z5tyw7v_d"/>`,
		"fallback": "fxemoji:aerialtramway",
	});
}

export default Component;
