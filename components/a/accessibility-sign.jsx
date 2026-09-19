import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yw--e53oz.css';
import '../../css/e/eqyl0dx4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yw--e53oz"/><path class="eqyl0dx4o"/></g>`,
		"fallback": "iconoir:accessibility-sign",
	});
}

export default Component;
