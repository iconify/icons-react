import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlginfbmv.css';
import '../../css/n/n4aevsb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mlginfbmv secondary"/><path class="n4aevsb3d primary"/></g>`,
		"fallback": "iconaut:a-large-small-duotone",
	});
}

export default Component;
