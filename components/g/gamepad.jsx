import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lo-bdo53p.css';
import '../../css/t/tcjvbpb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lo-bdo53p"/><path class="tcjvbpb5r wm-a"/></g>`,
		"fallback": "withicons:gamepad",
	});
}

export default Component;
