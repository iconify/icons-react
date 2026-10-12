import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkr2o4bel.css';
import '../../css/z/zic55xbmx.css';
import '../../css/j/js8wb_-8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wkr2o4bel"/><path class="zic55xbmx"/><path class="js8wb_-8n"/></g>`,
		"fallback": "lucide-extended:drumstick-duotone",
	});
}

export default Component;
