import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x83nd5bnd.css';
import '../../css/t/tet0_objy.css';
import '../../css/l/ler2aibxt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="x83nd5bnd"/><path clip-rule="evenodd" class="tet0_objy"/><path class="ler2aibxt"/></g>`,
		"fallback": "skill-icons:appwrite",
	});
}

export default Component;
