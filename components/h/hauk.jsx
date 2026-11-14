import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lomr6bbhm.css';
import '../../css/k/k5k2phbka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lomr6bbhm"/><path class="k5k2phbka"/>`,
		"fallback": "selfhst:hauk",
	});
}

export default Component;
