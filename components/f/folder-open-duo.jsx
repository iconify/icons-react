import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vhatbcc3h.css';
import '../../css/q/q55kigq6u.css';
import '../../css/e/eu5ukbiiu.css';
import '../../css/w/wotccxbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vhatbcc3h"/><path class="q55kigq6u wm-a"/><path class="eu5ukbiiu wm-a"/><path class="wotccxbib"/></g>`,
		"fallback": "withicons:folder-open-duo",
	});
}

export default Component;
