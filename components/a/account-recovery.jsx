import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/umi_lsbuk.css';
import '../../css/r/r93eu13-n.css';
import '../../css/r/ryl82g88k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="umi_lsbuk"/><path class="r93eu13-n"/><path class="ryl82g88k"/></g>`,
		"fallback": "hugeicons:account-recovery",
	});
}

export default Component;
