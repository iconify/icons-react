import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/v/v_u57kmwm.css';
import '../../css/w/wjq-an5qq.css';
import '../../css/r/riukhl86d.css';
import '../../css/e/ew2q4mw6b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="v_u57kmwm"/><path class="wjq-an5qq"/><circle transform="rotate(-180 11 31)" class="riukhl86d"/><path class="ew2q4mw6b"/></g>`,
		"fallback": "icon-park:cancer",
	});
}

export default Component;
