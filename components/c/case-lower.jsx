import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/ge6gmopwp.css';
import '../../css/h/hunpd1b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ge6gmopwp"/><path class="hunpd1b6w"/></g>`,
		"fallback": "withicons-retro:case-lower",
	});
}

export default Component;
