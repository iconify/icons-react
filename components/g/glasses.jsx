import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/f/fokfcxb4l.css';
import '../../css/a/a3lh-lbdl.css';
import '../../css/a/a792p2b0d.css';
import '../../css/f/frtaaybdi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="fokfcxb4l"/><path class="a3lh-lbdl"/><path class="a792p2b0d"/><path class="frtaaybdi"/></g>`,
		"fallback": "streamline-kameleon-color:glasses",
	});
}

export default Component;
