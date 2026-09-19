import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gtww1vtox.css';
import '../../css/t/t_oofsbsw.css';
import '../../css/l/louq78xpc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gtww1vtox"/><path class="t_oofsbsw"/><path class="louq78xpc"/></g>`,
		"fallback": "glyphs:basketball-duo",
	});
}

export default Component;
