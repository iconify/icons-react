import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xl6e-cvow.css';
import '../../css/d/dclo4wbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xl6e-cvow"/><path class="dclo4wbbt"/></g>`,
		"fallback": "iconoir:eye-empty",
	});
}

export default Component;
