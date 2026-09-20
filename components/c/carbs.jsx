import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/q/q-zkaqb7e.css';
import '../../css/p/pw_i8cckx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="q-zkaqb7e"/><path class="pw_i8cckx"/></g>`,
		"fallback": "lets-icons:carbs",
	});
}

export default Component;
