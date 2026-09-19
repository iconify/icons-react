import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cb_ev43di.css';
import '../../css/x/xfb-qcbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cb_ev43di"/><path class="xfb-qcbda"/></g>`,
		"fallback": "iconoir:git-pull-request",
	});
}

export default Component;
