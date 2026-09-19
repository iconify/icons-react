import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pyaoer-ho.css';
import '../../css/r/r966ofbfn.css';
import '../../css/o/ocorifb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pyaoer-ho"/><path class="r966ofbfn"/><path clip-rule="evenodd" class="ocorifb7t"/></g>`,
		"fallback": "iconoir:dew-point",
	});
}

export default Component;
