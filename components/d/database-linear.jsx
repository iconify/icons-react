import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/slv365_-o.css';
import '../../css/r/rn2chmb4w.css';
import '../../css/n/n44x2tswc.css';
import '../../css/u/uhk5occsz.css';
import '../../css/o/ov8-xub3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="slv365_-o"/><path class="rn2chmb4w"/><path class="n44x2tswc"/><path class="uhk5occsz"/><path class="ov8-xub3w"/></g>`,
		"fallback": "solar:database-linear",
	});
}

export default Component;
