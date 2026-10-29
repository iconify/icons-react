import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gmt1fkdfv.css';
import '../../css/f/fm6rs2b9w.css';
import '../../css/n/npx1ntq6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gmt1fkdfv"/><path class="fm6rs2b9w"/><path class="npx1ntq6p"/></g>`,
		"fallback": "withicons:crop-sketch",
	});
}

export default Component;
