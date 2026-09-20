import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_p7us8mf.css';
import '../../css/s/ss28ywb2k.css';
import '../../css/p/pmzs0tmcf.css';
import '../../css/b/bov2ir9ks.css';
import '../../css/e/e2m-l-b1y.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a_p7us8mf"/><path class="ss28ywb2k"/><path class="pmzs0tmcf"/><path clip-rule="evenodd" class="bov2ir9ks"/><path clip-rule="evenodd" class="e2m-l-b1y"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:gift-off",
	});
}

export default Component;
