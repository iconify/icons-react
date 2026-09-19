import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mzyt90bzr.css';
import '../../css/g/gv8sbzb8h.css';
import '../../css/j/j_dspgbkq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="mzyt90bzr"/><path class="gv8sbzb8h"/><path class="j_dspgbkq"/></g>`,
		"fallback": "icon-park:delete-key",
	});
}

export default Component;
