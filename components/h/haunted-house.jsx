import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x87vs2buk.css';
import '../../css/t/tdyvq4bpl.css';
import '../../css/h/hsf36n9ar.css';
import '../../css/c/c5doie9nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x87vs2buk"/><path class="tdyvq4bpl"/><path class="hsf36n9ar wm-a"/><path class="c5doie9nu wm-s"/></g>`,
		"fallback": "withicons:haunted-house",
	});
}

export default Component;
