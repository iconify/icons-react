import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olf_s2qvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olf_s2qvt"/>`,
		"fallback": "reicon:heart5",
	});
}

export default Component;
