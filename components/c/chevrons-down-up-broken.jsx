import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qgh7ic-3c.css';
import '../../css/r/r07sdub0t.css';
import '../../css/f/fxdm1bc-j.css';
import '../../css/s/sttcv9_ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qgh7ic-3c"/><path class="r07sdub0t"/><path class="fxdm1bc-j"/><path class="sttcv9_ok"/></g>`,
		"fallback": "solar:chevrons-down-up-broken",
	});
}

export default Component;
