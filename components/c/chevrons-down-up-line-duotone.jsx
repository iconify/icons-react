import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kfrug7s3s.css';
import '../../css/u/uyjuokbvi.css';
import '../../css/v/vtwk979ug.css';
import '../../css/x/xggl6t9lq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kfrug7s3s"/><path class="uyjuokbvi"/><path class="vtwk979ug"/><path class="xggl6t9lq"/></g>`,
		"fallback": "solar:chevrons-down-up-line-duotone",
	});
}

export default Component;
