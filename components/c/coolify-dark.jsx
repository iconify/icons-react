import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrnj_u0yg.css';
import '../../css/k/k5-idhbfu.css';
import '../../css/t/tz1tfxb6a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrnj_u0yg"/><path class="k5-idhbfu"/><path class="tz1tfxb6a"/>`,
		"fallback": "selfhst:coolify-dark",
	});
}

export default Component;
