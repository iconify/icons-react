import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vgmbu532v.css';
import '../../css/k/krirjzbhw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vgmbu532v"/><path class="krirjzbhw"/></g>`,
		"fallback": "icon-park:google",
	});
}

export default Component;
