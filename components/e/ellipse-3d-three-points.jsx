import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y82pdebtm.css';
import '../../css/f/fn0s7zbvt.css';
import '../../css/i/i0jww9b1h.css';
import '../../css/s/s-byz1bql.css';
import '../../css/e/edcmlz9gc.css';
import '../../css/f/fima-go2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y82pdebtm"/><path class="fn0s7zbvt"/><path class="i0jww9b1h"/><path class="s-byz1bql"/><path class="edcmlz9gc"/><path class="fima-go2w"/></g>`,
		"fallback": "iconoir:ellipse-3d-three-points",
	});
}

export default Component;
