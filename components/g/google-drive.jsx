import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldpv-hf5n.css';
import '../../css/y/yg0jyhbej.css';
import '../../css/h/hba5kpbit.css';
import '../../css/n/nn551pqdp.css';
import '../../css/y/yu8pyjesp.css';
import '../../css/x/xl-g2xt0h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldpv-hf5n"/><path class="yg0jyhbej"/><path class="hba5kpbit"/><path class="nn551pqdp"/><path class="yu8pyjesp"/><path class="xl-g2xt0h"/>`,
		"fallback": "selfhst:google-drive",
	});
}

export default Component;
