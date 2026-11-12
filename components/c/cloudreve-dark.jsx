import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvt5e6byc.css';
import '../../css/x/xggso64xb.css';
import '../../css/v/v-6n0zb4e.css';
import '../../css/r/rqa_vtz4c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvt5e6byc"/><circle class="xggso64xb"/><path class="v-6n0zb4e"/><path class="rqa_vtz4c"/>`,
		"fallback": "selfhst:cloudreve-dark",
	});
}

export default Component;
