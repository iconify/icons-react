import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/ddn8p_buc.css';
import '../../css/r/rjw-p2bwy.css';
import '../../css/d/d3v247bhu.css';
import '../../css/a/ay0tmzbaz.css';
import '../../css/a/aj5bbee7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ddn8p_buc"/><path class="rjw-p2bwy"/><path class="d3v247bhu"/><path class="ay0tmzbaz"/><path class="aj5bbee7q"/></g>`,
		"fallback": "solar:dumbbell-large-minimalistic-line-duotone",
	});
}

export default Component;
