import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mv4mpebft.css';
import '../../css/i/i0a_nyk6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mv4mpebft"/><path class="i0a_nyk6o wm-a"/></g>`,
		"fallback": "withicons:dental-chair",
	});
}

export default Component;
