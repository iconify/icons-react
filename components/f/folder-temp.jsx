import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7-c3zb9h.css';
import '../../css/r/rg12uoqrx.css';
import '../../css/z/ze5omzbef.css';
import '../../css/c/c23j0pb_c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7-c3zb9h"/><g class="rg12uoqrx"><path class="ze5omzbef"/><path class="c23j0pb_c"/></g>`,
		"fallback": "material-icon-theme:folder-temp",
	});
}

export default Component;
