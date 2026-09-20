import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxe3iy_vo.css';
import '../../css/b/bi25cle2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxe3iy_vo"/><path class="bi25cle2y"/>`,
		"fallback": "selfhst:acquiremock-light",
	});
}

export default Component;
