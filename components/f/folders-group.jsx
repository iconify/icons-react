import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdsyzfbog.css';
import '../../css/v/v_wzngb0a.css';
import '../../css/k/k8qe7j0ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fdsyzfbog"/><path class="v_wzngb0a"/><path class="k8qe7j0ev"/></g>`,
		"fallback": "lets-icons:folders-group",
	});
}

export default Component;
