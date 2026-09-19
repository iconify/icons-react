import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/duqea048n.css';
import '../../css/d/d07z4xb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="duqea048n"/><path class="d07z4xb8a"/></g>`,
		"fallback": "iconoir:fillet-3d",
	});
}

export default Component;
