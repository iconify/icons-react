import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ok4_19xwb.css';
import '../../css/t/tcjvbpb5r.css';
import '../../css/l/lo-bdo53p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ok4_19xwb"/><path class="tcjvbpb5r wm-a"/><path class="lo-bdo53p"/></g>`,
		"fallback": "withicons:gamepad-duo",
	});
}

export default Component;
