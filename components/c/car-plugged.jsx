import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wa5lu2h4f.css';
import '../../css/f/fn_w7lggo.css';
import '../../css/l/lh7j9tb9s.css';
import '../../css/j/jx0oupbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wa5lu2h4f"/><circle class="fn_w7lggo"/><circle class="lh7j9tb9s"/><path class="jx0oupbir"/></g>`,
		"fallback": "evicons:car-plugged",
	});
}

export default Component;
