import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl0qbld8c.css';
import '../../css/g/gb0t1hblg.css';
import '../../css/v/vtznphkau.css';
import '../../css/v/vz39nxhrf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl0qbld8c"/><g class="gb0t1hblg"><path class="vtznphkau"/><path class="vz39nxhrf"/></g>`,
		"fallback": "material-icon-theme:folder-docker",
	});
}

export default Component;
