import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c712vub3z.css';
import '../../css/v/vu_cilbnj.css';
import '../../css/c/cuea6kgcd.css';
import '../../css/o/oa32udbet.css';
import '../../css/i/iohv6bc-b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c712vub3z"/><path class="vu_cilbnj"/><path class="cuea6kgcd"/><path class="oa32udbet"/><path class="oa32udbet"/><path class="iohv6bc-b"/></g>`,
		"fallback": "icon-park:color-card",
	});
}

export default Component;
