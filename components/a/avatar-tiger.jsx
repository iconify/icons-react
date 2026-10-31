import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0hf9xeyx.css';
import '../../css/h/h0ewzcb5r.css';
import '../../css/a/artvyv0ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o0hf9xeyx wm-k"/><path class="h0ewzcb5r wm-shine"/><path class="artvyv0ed wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-tiger",
	});
}

export default Component;
