import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzu8y9-ki.css';
import '../../css/y/y0u0cmxvr.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzu8y9-ki"/><path class="y0u0cmxvr"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-latvia",
	});
}

export default Component;
