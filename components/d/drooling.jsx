import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/g-ivyab4m.css';
import '../../css/d/dgrszqblu.css';
import '../../css/r/rqnixx5da.css';
import '../../css/b/bxutntb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="g-ivyab4m"/><path class="dgrszqblu"/><path class="rqnixx5da"/><path class="bxutntb2z"/></g>`,
		"fallback": "hugeicons:drooling",
	});
}

export default Component;
