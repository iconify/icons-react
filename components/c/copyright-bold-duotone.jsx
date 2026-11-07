import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghfixm1dc.css';
import '../../css/q/qii6rvmzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghfixm1dc"/><path class="qii6rvmzw"/>`,
		"fallback": "solar:copyright-bold-duotone",
	});
}

export default Component;
