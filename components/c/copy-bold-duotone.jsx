import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwfa9_-5x.css';
import '../../css/m/mtplmt03a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwfa9_-5x"/><path class="mtplmt03a"/>`,
		"fallback": "solar:copy-bold-duotone",
	});
}

export default Component;
