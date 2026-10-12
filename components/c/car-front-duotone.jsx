import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hq5gbsb5w.css';
import '../../css/o/o8drxjbah.css';
import '../../css/r/rmftuj1wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hq5gbsb5w"/><path class="o8drxjbah"/><path class="rmftuj1wn"/></g>`,
		"fallback": "lucide-extended:car-front-duotone",
	});
}

export default Component;
