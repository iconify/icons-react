import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riagsac2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riagsac2m"/>`,
		"fallback": "hugeicons:dialpad-circle-02",
	});
}

export default Component;
