import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy901f9ms.css';
import '../../css/n/n-5kzabfr.css';
import '../../css/d/d0_q4g1fu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vy901f9ms"/><path class="n-5kzabfr"/><path class="d0_q4g1fu"/>`,
		"fallback": "selfhst:beets-flask-dark",
	});
}

export default Component;
