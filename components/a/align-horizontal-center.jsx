import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx8y2ds-k.css';
import '../../css/h/h2-2dgnfu.css';
import '../../css/j/jsmv-tewy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gx8y2ds-k"><path class="h2-2dgnfu"/><path class="jsmv-tewy"/></g>`,
		"fallback": "akar-icons:align-horizontal-center",
	});
}

export default Component;
