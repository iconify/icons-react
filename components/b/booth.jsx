import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y-uv8db3d.css';
import '../../css/o/os5c4pb1g.css';
import '../../css/r/rbvins8lp.css';
import '../../css/o/ooexezbdi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="y-uv8db3d"/><rect class="os5c4pb1g"/><path class="rbvins8lp"/><path class="ooexezbdi"/></g>`,
		"fallback": "icon-park:booth",
	});
}

export default Component;
