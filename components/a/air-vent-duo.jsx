import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j1zl5-bua.css';
import '../../css/g/gn83_cb7i.css';
import '../../css/j/j1_apjast.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j1zl5-bua"/><path class="gn83_cb7i wm-a"/><path class="j1_apjast"/></g>`,
		"fallback": "withicons:air-vent-duo",
	});
}

export default Component;
