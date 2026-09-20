import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj229s22e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj229s22e"/>`,
		"fallback": "ri:friendica-fill",
	});
}

export default Component;
