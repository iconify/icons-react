import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6pl10afv.css';
import '../../css/b/bdbr-nauf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6pl10afv"/><path class="bdbr-nauf"/></g>`,
		"fallback": "icon-park-outline:google",
	});
}

export default Component;
