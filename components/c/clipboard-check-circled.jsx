import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qqmv1h99a.css';
import '../../css/e/eyhpw0myq.css';
import '../../css/v/v_p5l6vke.css';
import '../../css/d/dsmb2pb7b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qqmv1h99a"/><path class="eyhpw0myq"/><path class="v_p5l6vke"/><path class="dsmb2pb7b"/></g>`,
		"fallback": "pepicons-pencil:clipboard-check-circled",
	});
}

export default Component;
