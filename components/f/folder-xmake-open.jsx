import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yypzf8b8r.css';
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
		"content": `<path class="yypzf8b8r"/><g class="uz-sy8b8e"><path transform="matrix(.61867 0 0 .61353 6.207 6.616)" class="mv_roiiyv"/><path transform="matrix(.61867 0 0 .61353 6.207 6.616)" class="b640teb6y"/><path transform="matrix(.61867 0 0 .61353 6.207 6.616)" class="e1q052dkb"/></g>`,
		"fallback": "catppuccin:folder-xmake-open",
	});
}

export default Component;
