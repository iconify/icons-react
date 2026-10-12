import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3f2o8bbq.css';
import '../../css/h/h4qhcub-h.css';
import '../../css/l/li_if2vdt.css';
import '../../css/j/jml_vy6xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k3f2o8bbq"/><circle transform="rotate(90 12 12)" class="h4qhcub-h"/><path class="li_if2vdt"/><path class="jml_vy6xe"/></g>`,
		"fallback": "andrsrxn:face-happy",
	});
}

export default Component;
