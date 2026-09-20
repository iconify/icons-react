import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phg1s7mys.css';
import '../../css/a/a35dc2b9v.css';
import '../../css/b/b681yhxlk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phg1s7mys"/><path class="a35dc2b9v"/><path class="b681yhxlk"/>`,
		"fallback": "selfhst:ente-locker-dark",
	});
}

export default Component;
