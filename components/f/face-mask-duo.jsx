import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b3_b6jb_f.css';
import '../../css/h/h8bbbszdv.css';
import '../../css/a/a6ey7sbng.css';
import '../../css/c/ci5_d5hwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b3_b6jb_f"/><path class="h8bbbszdv wm-a"/><path class="a6ey7sbng"/><path class="ci5_d5hwo wm-a"/></g>`,
		"fallback": "withicons:face-mask-duo",
	});
}

export default Component;
