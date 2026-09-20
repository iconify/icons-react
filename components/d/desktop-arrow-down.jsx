import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mo5s6toex.css';
import '../../css/q/qvwfepw7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mo5s6toex"/><path class="qvwfepw7h"/></g>`,
		"fallback": "reicon:desktop-arrow-down",
	});
}

export default Component;
