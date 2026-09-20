import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az4bd8-8i.css';
import '../../css/o/o8sjs0bqd.css';
import '../../css/g/gnp6kfbzj.css';
import '../../css/x/x_s_tccmn.css';
import '../../css/l/l0_ax0ejf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az4bd8-8i"/><path class="o8sjs0bqd"/><path class="gnp6kfbzj"/><path class="x_s_tccmn"/><path class="l0_ax0ejf"/>`,
		"fallback": "token:bidz",
	});
}

export default Component;
