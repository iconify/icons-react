import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2qtvgb0p.css';
import '../../css/q/qo0tyqbsw.css';
import '../../css/t/t7_drybpi.css';
import '../../css/p/p3bxfdc9b.css';
import '../../css/z/zi0m0hb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2qtvgb0p wm-k"/><path class="qo0tyqbsw wm-a"/><path class="t7_drybpi wm-a"/><path class="p3bxfdc9b wm-a"/><path class="wm-a zi0m0hb5k"/>`,
		"fallback": "withicons-bauhaus:credit-card",
	});
}

export default Component;
