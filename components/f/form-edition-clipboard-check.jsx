import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/ph4gv3bem.css';
import '../../css/e/e67j0c3_u.css';
import '../../css/c/ctop38bcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ph4gv3bem"/><path class="e67j0c3_u"/><path class="ctop38bcw"/></g>`,
		"fallback": "streamline-freehand:form-edition-clipboard-check",
	});
}

export default Component;
