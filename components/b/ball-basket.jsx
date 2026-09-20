import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g1ygkpenk.css';
import '../../css/e/eq4ku8q_n.css';
import '../../css/q/q58jyg4uk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g1ygkpenk"/><path class="eq4ku8q_n"/><circle class="q58jyg4uk"/></g>`,
		"fallback": "reicon:ball-basket",
	});
}

export default Component;
