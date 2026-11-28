import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx-p0-crv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k4-c7ob6h.css';
import '../../css/w/w7_mhrwuu.css';
import '../../css/i/ijb5i-b9c.css';
import '../../css/h/h_-fe7h9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx-p0-crv secondary"/><g class="dt0cm9dhy primary"><path class="k4-c7ob6h"/><path class="w7_mhrwuu"/><path class="ijb5i-b9c"/><path class="h_-fe7h9o"/></g>`,
		"fallback": "iconaut:calendar-search-duo",
	});
}

export default Component;
