import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s4uk5n7uw.css';
import '../../css/h/hnxobrbrn.css';
import '../../css/o/ohlg0wbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="s4uk5n7uw"/><path class="hnxobrbrn wm-a"/><path class="ohlg0wbaj wm-s"/></g>`,
		"fallback": "withicons:champagne-toast",
	});
}

export default Component;
