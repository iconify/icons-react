import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b103epbdu.css';
import '../../css/v/v4-7tcbbz.css';
import '../../css/j/jtgp3g1cj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b103epbdu"/><path class="v4-7tcbbz"/><path class="jtgp3g1cj"/>`,
		"fallback": "selfhst:colota-dark",
	});
}

export default Component;
