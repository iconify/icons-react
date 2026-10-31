import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0gouom1v.css';
import '../../css/l/lu7mpmx6f.css';
import '../../css/b/bmuj7mt3a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e0gouom1v"/><path class="lu7mpmx6f"/><path class="bmuj7mt3a"/></g>`,
		"fallback": "streamline-kameleon-color:chalkboard-pop",
	});
}

export default Component;
