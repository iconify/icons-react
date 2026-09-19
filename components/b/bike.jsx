import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pukg5ji7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pukg5ji7d"/>`,
		"fallback": "grommet-icons:bike",
	});
}

export default Component;
