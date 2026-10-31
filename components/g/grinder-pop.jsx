import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6zyzrotw.css';
import '../../css/y/ym0_py_ug.css';
import '../../css/t/tvyqwpb4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d6zyzrotw"/><path class="ym0_py_ug"/><path clip-rule="evenodd" class="tvyqwpb4f"/></g>`,
		"fallback": "streamline-kameleon-color:grinder-pop",
	});
}

export default Component;
