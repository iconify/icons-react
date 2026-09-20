import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zdvx-07sg.css';
import '../../css/f/fjxo0tfbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zdvx-07sg"/><path class="fjxo0tfbi"/></g>`,
		"fallback": "solar:dumbbells-line-duotone",
	});
}

export default Component;
