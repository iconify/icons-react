import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spajzybyt.css';
import '../../css/e/ev7zm84ma.css';
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
		"content": `<path class="spajzybyt"/><g class="ev7zm84ma"><path class="ze5omzbef"/><path class="c23j0pb_c"/></g>`,
		"fallback": "material-icon-theme:folder-backup",
	});
}

export default Component;
