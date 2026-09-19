import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bgr4__y9v.css';
import '../../css/a/aqf33k9ku.css';
import '../../css/f/f_cwpgbyn.css';
import '../../css/l/l0y6kqsdf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="bgr4__y9v"/><rect class="aqf33k9ku"/><rect class="f_cwpgbyn"/><path class="l0y6kqsdf"/></g>`,
		"fallback": "icon-park-outline:city-one",
	});
}

export default Component;
