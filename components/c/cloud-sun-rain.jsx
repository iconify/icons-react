import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m9-4k6y9w.css';
import '../../css/p/pf05l3ymp.css';
import '../../css/d/dkfws9ftw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m9-4k6y9w"/><path class="pf05l3ymp wm-a"/><path class="dkfws9ftw wm-s"/></g>`,
		"fallback": "withicons:cloud-sun-rain",
	});
}

export default Component;
