import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/frfk1pw2o.css';
import '../../css/w/wn0pp6ege.css';
import '../../css/h/hcwvzkbxx.css';
import '../../css/z/z9a_vxbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="frfk1pw2o"/><path class="wn0pp6ege"/><path class="hcwvzkbxx"/><path class="z9a_vxbrs"/></g>`,
		"fallback": "matita:align-right",
	});
}

export default Component;
