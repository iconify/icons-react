import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as7wynzmz.css';
import '../../css/r/rzineglrc.css';
import '../../css/g/gptpctb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="as7wynzmz"/><path class="rzineglrc"/><path class="gptpctb9i"/></g>`,
		"fallback": "lets-icons:cloud-alt-duotone",
	});
}

export default Component;
