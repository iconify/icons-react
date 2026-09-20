import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6-b8lbmz.css';
import '../../css/n/ngo7q51al.css';
import '../../css/h/hsx4c7bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y6-b8lbmz"/><path clip-rule="evenodd" class="ngo7q51al"/><path clip-rule="evenodd" class="hsx4c7bie"/></g>`,
		"fallback": "solar:augmented-reality-bold-duotone",
	});
}

export default Component;
