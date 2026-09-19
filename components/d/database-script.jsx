import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d1_pkrbvj.css';
import '../../css/p/pt65rjb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d1_pkrbvj"/><path class="pt65rjb_z"/></g>`,
		"fallback": "iconoir:database-script",
	});
}

export default Component;
