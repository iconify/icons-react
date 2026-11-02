import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/hyr40ccgz.css';
import '../../css/q/qrhm9ybvs.css';
import '../../css/m/ma4i65b8v.css';
import '../../css/y/y9z8ttb4v.css';
import '../../css/v/vl89vw39x.css';
import '../../css/q/q5mpj9b4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="hyr40ccgz"/><path class="qrhm9ybvs"/><path class="ma4i65b8v"/><path class="y9z8ttb4v"/><path class="vl89vw39x"/><path class="q5mpj9b4h"/></g>`,
		"fallback": "matita:cloud-lightning",
	});
}

export default Component;
