import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/go7h00xnw.css';
import '../../css/y/y71x6_osi.css';
import '../../css/m/mqjuz14-v.css';
import '../../css/e/e0fuurbwv.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="go7h00xnw"/><path class="y71x6_osi"/><path class="mqjuz14-v"/><path class="e0fuurbwv"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:enter-circle",
	});
}

export default Component;
