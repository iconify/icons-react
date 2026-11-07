import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bjy7ielyu.css';
import '../../css/o/oumnh7bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bjy7ielyu"/><path class="oumnh7bvl"/></g>`,
		"fallback": "solar:dumbbells-broken",
	});
}

export default Component;
