import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ecyiiytap.css';
import '../../css/q/qclwmq-1x.css';
import '../../css/b/bax3frbml.css';
import '../../css/d/dya2tw6rb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ecyiiytap"/><circle class="qclwmq-1x"/><circle class="bax3frbml"/><path class="dya2tw6rb"/></g>`,
		"fallback": "hugeicons:bubbles",
	});
}

export default Component;
