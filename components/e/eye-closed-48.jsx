import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr43yyb3r.css';
import '../../css/v/vp5943bqh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr43yyb3r"/><path class="vp5943bqh"/>`,
		"fallback": "energy-icons:eye-closed-48",
	});
}

export default Component;
