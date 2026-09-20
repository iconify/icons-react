import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7_p-eb5l.css';
import '../../css/l/lx1hlcb1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7_p-eb5l"/><path class="lx1hlcb1u"/>`,
		"fallback": "selfhst:hyperdx",
	});
}

export default Component;
