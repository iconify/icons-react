import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/odm-21boh.css';
import '../../css/n/n6i2qcb0p.css';
import '../../css/u/uxgpy7ntg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="odm-21boh"/><path class="n6i2qcb0p"/><path class="uxgpy7ntg"/></g>`,
		"fallback": "iconoir:agile",
	});
}

export default Component;
