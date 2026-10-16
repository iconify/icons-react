import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrw5zccqv.css';
import '../../css/f/fuf51j_ed.css';
import '../../css/x/x0tickbse.css';
import '../../css/r/rod6sdbcj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrw5zccqv"/><path class="fuf51j_ed"/><path class="x0tickbse"/><path class="rod6sdbcj"/>`,
		"fallback": "energy-icons:folder-sync-48-bold",
	});
}

export default Component;
