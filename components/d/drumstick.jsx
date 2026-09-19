import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ol18-e58x.css';
import '../../css/p/p1ojkli4s.css';
import '../../css/s/s5aydff-s.css';
import '../../css/w/wj6g0ubdg.css';
import '../../css/f/f9aoq4i-d.css';
import '../../css/b/bb6ojk4-u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ol18-e58x"/><path class="p1ojkli4s"/><ellipse transform="rotate(45 32.535 15.435)" class="s5aydff-s"/><circle transform="rotate(45 30.06 11.398)" class="wj6g0ubdg"/><circle transform="rotate(45 37.132 18.47)" class="f9aoq4i-d"/><circle transform="rotate(45 31.475 17.055)" class="bb6ojk4-u"/></g>`,
		"fallback": "icon-park:drumstick",
	});
}

export default Component;
