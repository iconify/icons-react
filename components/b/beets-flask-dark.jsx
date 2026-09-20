import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf8md-ebl.css';
import '../../css/n/nzlse_b6a.css';
import '../../css/d/d0_q4g1fu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xf8md-ebl"/><path class="nzlse_b6a"/><path class="d0_q4g1fu"/>`,
		"fallback": "selfhst:beets-flask-dark",
	});
}

export default Component;
