import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fhvfp_bvz.css';
import '../../css/x/xd0mbvs2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fhvfp_bvz"/><path class="xd0mbvs2o"/></g>`,
		"fallback": "reicon:arrow-circle-right",
	});
}

export default Component;
