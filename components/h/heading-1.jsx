import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ejg_wxkov.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/i/ick6dj6dx.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ejg_wxkov wm-k"/><path class="wm-a xa3jgydgh"/><path class="ick6dj6dx wm-s"/><path class="wcaq-jbkf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:heading-1",
	});
}

export default Component;
