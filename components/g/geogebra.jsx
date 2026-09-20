import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx-2lwb9f.css';
import '../../css/a/atjk8mbde.css';
import '../../css/a/a9o5t_b5e.css';
import '../../css/p/pnfsjvx9q.css';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx-2lwb9f"/><g class="atjk8mbde"><path class="a9o5t_b5e"/><path class="pnfsjvx9q"/></g>`,
		"fallback": "thesvg-color:geogebra",
	});
}

export default Component;
