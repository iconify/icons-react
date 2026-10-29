import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/icdm8abfp.css';
import '../../css/j/j8ihovbit.css';
import '../../css/t/tsvm_abrn.css';
import '../../css/i/ic1866bck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="icdm8abfp wm-k"/><path class="j8ihovbit wm-a"/><path class="tsvm_abrn"/><path class="ic1866bck"/></g>`,
		"fallback": "withicons-bauhaus:avatar-bunny",
	});
}

export default Component;
