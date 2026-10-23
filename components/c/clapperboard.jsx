import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqi3bom7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqi3bom7m"/>`,
		"fallback": "vadivam:clapperboard",
	});
}

export default Component;
