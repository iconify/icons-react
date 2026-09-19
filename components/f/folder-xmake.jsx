import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3ugng94a.css';
import '../../css/u/uz-sy8b8e.css';
import '../../css/m/mv_roiiyv.css';
import '../../css/b/b640teb6y.css';
import '../../css/e/e1q052dkb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3ugng94a"/><g class="uz-sy8b8e"><path transform="matrix(.61867 0 0 .61353 6.207 6.616)" class="mv_roiiyv"/><path transform="matrix(.61867 0 0 .61353 6.207 6.616)" class="b640teb6y"/><path transform="matrix(.61867 0 0 .61353 6.207 6.616)" class="e1q052dkb"/></g>`,
		"fallback": "catppuccin:folder-xmake",
	});
}

export default Component;
