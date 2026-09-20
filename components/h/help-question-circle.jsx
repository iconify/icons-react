import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v6dkth_az.css';
import '../../css/k/kh_n3mb3b.css';
import '../../css/x/xaa72ccqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v6dkth_az"/><path class="kh_n3mb3b"/><path class="xaa72ccqn"/></g>`,
		"fallback": "streamline-freehand-color:help-question-circle",
	});
}

export default Component;
