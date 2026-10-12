import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/es97pcacw.css';
import '../../css/u/ucogdbb3g.css';
import '../../css/z/zxixl8bis.css';
import '../../css/i/i0uwf3kog.css';
import '../../css/c/cu2jleblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="es97pcacw"/><path class="ucogdbb3g"/><path class="zxixl8bis"/><path class="i0uwf3kog"/><path class="cu2jleblt"/></g>`,
		"fallback": "lucide-extended:database-backup-duotone",
	});
}

export default Component;
