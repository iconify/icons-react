import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfo7ih4ii.css';
import '../../css/u/uo8ej_iun.css';
import '../../css/h/hbsz9tbuj.css';
import '../../css/u/uxr0fqbrg.css';
import '../../css/k/k7hj2lt9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfo7ih4ii"/><path class="uo8ej_iun"/><path class="hbsz9tbuj"/><path clip-rule="evenodd" class="uxr0fqbrg"/><path class="k7hj2lt9d"/>`,
		"fallback": "token:bbank",
	});
}

export default Component;
