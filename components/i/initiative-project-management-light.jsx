import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1q08elin.css';
import '../../css/l/lqso_0biw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1q08elin"/><path class="lqso_0biw"/>`,
		"fallback": "selfhst:initiative-project-management-light",
	});
}

export default Component;
