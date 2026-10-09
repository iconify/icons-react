import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtsgfacfk.css';
import '../../css/b/bzc7trb_y.css';
import '../../css/n/nwz76kjzw.css';
import '../../css/h/hztb-052z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtsgfacfk"/><path class="bzc7trb_y"/><path class="nwz76kjzw"/><path class="hztb-052z"/>`,
		"fallback": "energy-icons:concentrated-solar-20",
	});
}

export default Component;
