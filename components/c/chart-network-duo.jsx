import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j-h64fb-q.css';
import '../../css/c/cw36_6mco.css';
import '../../css/o/orw_fqitx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j-h64fb-q"/><path class="cw36_6mco wm-a"/><path class="orw_fqitx"/></g>`,
		"fallback": "withicons:chart-network-duo",
	});
}

export default Component;
