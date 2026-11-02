import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/cc0mz8ytr.css';
import '../../css/l/lf60ieb-k.css';
import '../../css/e/emi3zzq4a.css';
import '../../css/o/ogmki_bjr.css';
import '../../css/x/xv_z_ubpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="cc0mz8ytr"/><path class="lf60ieb-k"/><path class="emi3zzq4a"/><path class="ogmki_bjr"/><path class="xv_z_ubpb"/></g>`,
		"fallback": "matita:beaker",
	});
}

export default Component;
