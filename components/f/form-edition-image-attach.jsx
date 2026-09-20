import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q_sgc5ccm.css';
import '../../css/t/tnt2-yler.css';
import '../../css/r/rpvb5zbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q_sgc5ccm"/><path class="tnt2-yler"/><path class="rpvb5zbto"/></g>`,
		"fallback": "streamline-freehand-color:form-edition-image-attach",
	});
}

export default Component;
