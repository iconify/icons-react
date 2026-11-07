import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbp17eb1m.css';
import '../../css/x/xza96qbbg.css';
import '../../css/g/grj_h9ayp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbp17eb1m"/><path class="xza96qbbg"/><path clip-rule="evenodd" class="grj_h9ayp"/>`,
		"fallback": "solar:face-scan-circle-outline",
	});
}

export default Component;
